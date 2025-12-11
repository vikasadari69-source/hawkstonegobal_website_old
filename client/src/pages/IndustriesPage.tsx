import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

import bfsiImage from "@assets/generated_images/bfsi_banking_technology_sector.png";
import retailImage from "@assets/generated_images/retail_ecommerce_technology.png";
import autoImage from "@assets/generated_images/automotive_mobility_technology.png";
import healthcareImage from "@assets/generated_images/healthcare_life_sciences_tech.png";
import telecomImage from "@assets/generated_images/telecommunications_network_infrastructure.png";
import connectivityImage from "@assets/generated_images/global_tech_connectivity_abstract.png";

const industries = [
  {
    id: "bfsi",
    title: "BFSI",
    subtitle: "Banking, Financial Services & Insurance",
    description:
      "Powering digital transformation in financial services with expertise in core banking, fintech, regulatory technology, and wealth management solutions. Our professionals bring deep domain knowledge in risk management, trading systems, and payment technologies.",
    longDescription: "The financial services sector demands professionals who understand both technology and the intricate regulatory landscape. Our BFSI practice has placed over 2,000 technology professionals across investment banks, retail banks, insurance companies, and fintech startups. From core banking modernization to AI-driven trading systems, we deliver talent that drives innovation while ensuring compliance.",
    image: bfsiImage,
    expertise: ["Core Banking Systems", "Trading Platforms", "Risk Management", "Payment Gateway", "Regulatory Compliance", "Wealth Management"],
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    subtitle: "Digital Commerce Solutions",
    description:
      "Enabling omnichannel excellence with expertise in e-commerce platforms, supply chain technology, customer experience systems, and retail analytics. From Shopify to SAP, our talent delivers seamless shopping experiences.",
    longDescription: "The retail landscape has transformed dramatically, with technology at the center of every customer interaction. Our retail practice supports brands in creating seamless omnichannel experiences, optimizing supply chains, and leveraging data for personalized customer engagement. We've helped retailers of all sizes—from D2C startups to global retail giants—build their digital capabilities.",
    image: retailImage,
    expertise: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Supply Chain Tech", "POS Systems", "Mobile Commerce"],
  },
  {
    id: "automotive",
    title: "Automotive & Mobility",
    subtitle: "Smart Manufacturing & Connected Vehicles",
    description:
      "Driving the future of mobility with expertise in connected vehicles, autonomous systems, EV technology, and smart manufacturing. Our engineers support Industry 4.0 initiatives across the automotive value chain.",
    longDescription: "The automotive industry is undergoing its most significant transformation since the invention of the assembly line. Our automotive practice provides talent for electric vehicle development, autonomous driving systems, connected car platforms, and smart manufacturing. We partner with OEMs, Tier 1 suppliers, and mobility startups to build the future of transportation.",
    image: autoImage,
    expertise: ["EV Systems", "Autonomous Driving", "Connected Vehicles", "Manufacturing IoT", "Telematics", "Vehicle Software"],
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Medical Technology Innovation",
    description:
      "Advancing healthcare with expertise in health informatics, medical devices, pharmaceutical R&D, and regulatory compliance. Our talent understands HIPAA, FDA requirements, and clinical trial management.",
    longDescription: "Healthcare technology is transforming patient care, drug discovery, and medical research. Our healthcare practice provides professionals who understand the unique challenges of this highly regulated industry. From electronic health records to AI-powered diagnostics, we help healthcare organizations innovate while maintaining the highest standards of patient safety and data security.",
    image: healthcareImage,
    expertise: ["EHR Systems", "Medical Devices", "Clinical Trials", "Health Analytics", "Telemedicine", "Regulatory Tech"],
  },
  {
    id: "telecom",
    title: "Telecommunications",
    subtitle: "Network Infrastructure Solutions",
    description:
      "Connecting the world with expertise in 5G, network infrastructure, OSS/BSS, and telecommunications software. Our professionals support carriers, equipment manufacturers, and service providers globally.",
    longDescription: "The telecommunications industry is the backbone of our connected world. Our telecom practice provides talent for 5G rollouts, network virtualization, OSS/BSS modernization, and next-generation service delivery. We partner with carriers, equipment manufacturers, and technology vendors to build the networks that power digital economies.",
    image: telecomImage,
    expertise: ["5G Networks", "Network Virtualization", "OSS/BSS Systems", "Edge Computing", "IoT Platforms", "Service Orchestration"],
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    subtitle: "Digital Transformation Services",
    description:
      "Enabling digital transformation with expertise across cloud, AI/ML, data engineering, and enterprise architecture. Our consultants partner with leading technology firms to deliver complex transformation programs.",
    longDescription: "Technology consulting firms are the catalysts of enterprise digital transformation. Our consulting practice provides talent to leading global consultancies and boutique specialists alike. From cloud migrations to AI implementations, our professionals bring both technical depth and consulting acumen to deliver transformative outcomes for their clients.",
    image: connectivityImage,
    expertise: ["Cloud Architecture", "AI/ML Engineering", "Data Engineering", "Enterprise Architecture", "DevOps", "Digital Strategy"],
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-industries-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                Deep Domain Expertise Across Sectors
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We bring specialized knowledge and proven talent solutions to the industries driving global innovation and economic growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-industries-list">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="scroll-mt-24"
                id={industry.id}
                data-testid={`industry-${industry.id}`}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {index % 2 === 0 ? (
                    <SlideInLeft>
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </SlideInLeft>
                  ) : (
                    <SlideInRight className="lg:col-start-2">
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </SlideInRight>
                  )}

                  <FadeInUp className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <span className="text-primary font-semibold text-sm">{industry.subtitle}</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-1 mb-4">{industry.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{industry.longDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {industry.stats.map((stat) => (
                        <span
                          key={stat}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Our Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.expertise.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button data-testid={`button-industry-contact-${industry.id}`}>
                        Discuss Your Needs
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </FadeInUp>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-industries-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our expertise extends beyond these sectors. Contact us to discuss how we can support your specific industry needs.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" data-testid="button-industries-cta">
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageLayout>
  );
}
