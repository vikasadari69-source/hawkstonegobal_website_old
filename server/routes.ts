import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, company, service, message } = req.body;

      console.log("Contact form submission received:", { name, email, service });

      // Validate required fields
      if (!name || !email || !service || !message) {
        console.log("Validation failed - missing fields");
        return res.status(400).json({
          message: "Missing required fields: name, email, service, message"
        });
      }

      if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
        console.error("Missing email configuration: EMAIL_USER or EMAIL_APP_PASSWORD not set");
        return res.status(500).json({
          message: "Server configuration error: Email credentials not set"
        });
      }

      // Create email transporter using Gmail
      console.log("Creating email transporter...");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      // Verify transporter configuration
      await transporter.verify();
      console.log("Email transporter verified successfully");

      // Find service label
      const serviceLabels: Record<string, string> = {
        "contract-staffing": "Contract & Temporary Staffing",
        "permanent-recruitment": "Permanent Recruitment",
        "talent-acquisition": "Talent Acquisition",
        "offshore-delivery": "Offshore & Nearshore Delivery",
        "managed-services": "Managed Services (SOW)",
        "executive-hiring": "Executive & Leadership Hiring",
        "other": "Other"
      };

      const serviceLabel = serviceLabels[service] || service;

      // Compose email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `New Contact Form Submission - ${serviceLabel}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Service Interest:</strong> ${serviceLabel}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>This message was sent from the Hawkstone Global Solutions contact form.</small></p>
        `,
      };

      console.log("Sending email to:", mailOptions.to);

      // Send email
      const result = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", result.messageId);

      res.status(200).json({
        message: "Contact form submitted successfully"
      });

    } catch (error) {
      console.error("Error sending contact email:", error);
      res.status(500).json({
        message: "Failed to send contact form. Please try again later."
      });
    }
  });

  // Careers application submission endpoint
  app.post("/api/careers", async (req, res) => {
    try {
      const { firstName, lastName, email, countryCode, phone, jobTitle, jobId, consent1, consent2, linkedinProfile, resumeFileName, resumeFileType, resumeData } = req.body;

      console.log("Career application submission received:", { firstName, lastName, email, jobTitle });

      // Validate required fields
      if (!firstName || !lastName || !email || !phone || !jobTitle || !consent1) {
        console.log("Validation failed - missing fields");
        return res.status(400).json({
          message: "Missing required fields: firstName, lastName, email, phone, jobTitle, consent1"
        });
      }

      if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
        console.error("Missing email configuration: EMAIL_USER or EMAIL_APP_PASSWORD not set");
        return res.status(500).json({
          message: "Server configuration error: Email credentials not set"
        });
      }

      // Create email transporter using Gmail
      console.log("Creating email transporter...");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      // Verify transporter configuration
      await transporter.verify();
      console.log("Email transporter verified successfully");

      // Prepare email content
      let emailContent = `
        <h2>New Career Application Submission</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${linkedinProfile ? `<p><strong>LinkedIn Profile:</strong> <a href="${linkedinProfile}">${linkedinProfile}</a></p>` : ''}
        <p><strong>Data Processing Consent:</strong> ${consent1 ? "Yes" : "No"}</p>
        <p><strong>Data Retention Consent:</strong> ${consent2 ? "Yes" : "No"}</p>
        <hr>
        <p><small>This application was submitted through the Hawkstone Global Solutions careers page.</small></p>
      `;

      // Prepare email options
      const mailOptions: any = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `New Career Application - ${jobTitle}`,
        html: emailContent,
      };

      // Add resume attachment if provided
      if (resumeData && resumeFileName) {
        try {
          // Extract base64 data (remove data URL prefix)
          const base64Data = resumeData.split(',')[1];
          mailOptions.attachments = [{
            filename: resumeFileName,
            content: base64Data,
            encoding: 'base64'
          }];
          console.log("Resume attachment added:", resumeFileName);
        } catch (error) {
          console.log("Could not attach resume file:", error);
        }
      }

      console.log("Sending career application email to:", mailOptions.to);

      // Send email
      const result = await transporter.sendMail(mailOptions);
      console.log("Career application email sent successfully:", result.messageId);

      res.status(200).json({
        message: "Career application submitted successfully"
      });

    } catch (error) {
      console.error("Error sending career application email:", error);
      res.status(500).json({
        message: "Failed to submit career application. Please try again later."
      });
    }
  });

  return httpServer;
}
