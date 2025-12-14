import express, { type Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(express.json({
    limit: '50mb',
    verify: (req, _res, buf) => {
        (req as any).rawBody = buf;
    },
}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// Debug logging middleware
app.use((req, res, next) => {
    console.log(`[API Debug] ${req.method} ${req.url} (path: ${req.path}, baseUrl: ${req.baseUrl})`);
    next();
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString()
    });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
    try {
        console.log("Contact form endpoint hit:", req.method, req.url);
        console.log("Request headers:", req.headers);
        console.log("Request body:", req.body);

        const { name, email, phone, company, service, message } = req.body;

        console.log("Contact form submission received:", { name, email, service });

        // Validate required fields
        if (!name || !email || !service || !message) {
            console.log("Validation failed - missing fields");
            return res.status(400).json({
                message: "Missing required fields: name, email, service, message"
            });
        }

        // Check environment variables
        console.log("Checking environment variables...");
        console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
        console.log("EMAIL_APP_PASSWORD exists:", !!process.env.EMAIL_APP_PASSWORD);
        console.log("EMAIL_RECIPIENT exists:", !!process.env.EMAIL_RECIPIENT);

        if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
            console.error("Missing email configuration: EMAIL_USER or EMAIL_APP_PASSWORD not set");
            return res.status(500).json({
                message: "Server configuration error: Email credentials not set"
            });
        }

        // Import nodemailer dynamically
        const nodemailer = require("nodemailer");

        // Create email transporter using Gmail with timeout
        console.log("Creating email transporter...");
        const transporter = nodemailer.createTransporter({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
            // Add timeout for Vercel serverless environment
            connectionTimeout: 5000, // 5 seconds
            greetingTimeout: 3000,   // 3 seconds
            socketTimeout: 5000,    // 5 seconds
        });

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
            to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
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

        // Send email with timeout protection for Vercel
        const emailPromise = transporter.sendMail(mailOptions);
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Email sending timeout')), 8000); // 8 second timeout
        });

        const result = await Promise.race([emailPromise, timeoutPromise]);
        console.log("Email sent successfully:", (result as any).messageId);

        res.status(200).json({
            message: "Contact form submitted successfully"
        });

    } catch (error) {
        console.error("Error sending contact email:", error);
        console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
        
        // Always return a JSON response, even in error cases
        try {
            res.status(500).json({
                message: "Failed to send contact form. Please try again later.",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        } catch (jsonError) {
            console.error("Failed to send JSON response:", jsonError);
            // Fallback response if JSON serialization fails
            res.status(500).set('Content-Type', 'application/json').end('{"message":"Internal server error"}');
        }
    }
});

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error("API Error handled by middleware:", err);
    res.status(status).json({ message });
});

// 404 handler for API routes
app.use((req, res) => {
    res.status(404).json({
        message: "API route not found",
        path: req.path
    });
});

export default app;
