import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, Users, Clock, DollarSign, Layers, Zap, ArrowRight, CheckCircle, Award, Shield, Headphones, Target, Briefcase, BarChart2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const reasons = [
  {
    icon: Users,
    title: "Trusted Recruitment Partner",
    description:
      "We partner with organisations across the UK and Europe to deliver reliable, compliant, and results-driven recruitment solutions. Our approach combines deep market knowledge, strong client relationships, and a commitment to quality delivery.",
    details: [
      "Proven experience across UK, EU, and global staffing markets",
      "Dedicated account management and personalised service",
      "Strong focus on quality, compliance, and delivery timelines",
      "Access to a wide pool of pre-screened, job-ready talent",
      "Transparent communication and measurable outcomes"
    ],
  },
  {
    icon: Target,
    title: "Results-Driven & Client-Centric",
    description:
      "We go beyond traditional recruitment by aligning our services with your business objectives. Our consultants focus on understanding your workforce needs and delivering talent that drives performance and growth.",
    details: [
      "Client-first recruitment approach",
      "High fill rates and reduced time-to-hire",
      "Scalable hiring solutions for permanent and contract roles",
      "Industry-specific recruitment expertise",
      "Long-term partnerships built on trust and performance"
    ],
  },
  {
    icon: Shield,
    title: "Compliance, Quality & Speed",
    description:
      "In a highly regulated recruitment environment, compliance and speed matter. We deliver recruitment solutions that meet UK employment standards while ensuring rapid access to skilled professionals.",
    details: [
      "Full compliance with UK employment law, GDPR, and IR35",
      "Fast and efficient recruitment turnaround",
      "Experience working within MSP and VMS environments",
      "Robust screening and quality assurance processes",
      "Reliable reporting and recruitment analytics"
    ],
  },
  {
    icon: Layers,
    title: "End-to-End Talent Solutions",
    description:
      "From workforce planning to final onboarding, we offer end-to-end talent solutions designed to support evolving business needs across the UK and Europe.",
    details: [
      "Comprehensive recruitment lifecycle management",
      "Expertise across permanent, contract, and executive hiring",
      "Strong candidate experience and employer branding focus",
      "Strategic workforce advisory and market insights",
      "Consistent delivery across multi-location hiring"
    ],
  },
  {
    icon: Briefcase,
    title: "Boutique Service, Enterprise Capability",
    description:
      "We combine the agility of a boutique recruitment firm with the delivery strength of an enterprise staffing partner. This allows us to adapt quickly while maintaining high standards of service and accountability.",
    details: [
      "Agile and responsive recruitment teams",
      "Customised hiring strategies, not one-size-fits-all solutions",
      "Strong stakeholder engagement and communication",
      "Access to niche and hard-to-find talent",
      "Measurable ROI and long-term value creation"
    ],
  },
  {
    icon: BarChart2,
    title: "Market Insight & Strategic Workforce Support",
    description:
      "We help organisations stay ahead by combining real-time market intelligence with strategic workforce planning. Our consultative approach enables smarter hiring decisions and sustainable workforce growth across the UK and Europe.",
    details: [
      "Deep understanding of UK and EU labour market trends",
      "Data-driven recruitment and workforce planning",
      "Advisory support on talent availability, rates, and skills demand",
      "Proactive hiring strategies aligned to business growth plans",
      "Trusted guidance for long-term workforce optimisation"
    ],
  },
];

const testimonials = [
  {
    quote: "Hawkstone has been instrumental in building our engineering team. Their understanding of our culture and technical requirements is exceptional.",
    author: "CTO",
    company: "Global Investment Bank",
  },
  {
    quote: "The speed and quality of candidates presented was impressive. They delivered where others failed.",
    author: "VP Engineering",
    company: "Leading E-Commerce Platform",
  },
  {
    quote: "Our offshore development center, built with Hawkstone's help, has exceeded all expectations in quality and productivity.",
    author: "Head of Technology",
    company: "Fortune 500 Retailer",
  },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-why-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <button className="inline-block text-[#FFB000] font-semibold text-sm uppercase tracking-wider bg-blue-900 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors cursor-pointer shadow-lg">
                Why Choose Us
              </button>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                The Hawkstone Advantage
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                What sets us apart is our unwavering commitment to quality, speed, and value. Here's why leading enterprises choose Hawkstone Global Software.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-reasons">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Six Reasons to Partner With Us
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <Card
                  className="p-6 md:p-8 hover-elevate relative overflow-visible h-full"
                  data-testid={`card-reason-${reason.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What Our Clients Say
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 h-full flex flex-col">
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-why-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Hawkstone Difference?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 500+ enterprises that trust Hawkstone Global Software for their technology talent needs.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" data-testid="button-why-cta">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
