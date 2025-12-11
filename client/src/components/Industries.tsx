import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    image: bfsiImage,
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    subtitle: "Digital Commerce Solutions",
    description:
      "Enabling omnichannel excellence with expertise in e-commerce platforms, supply chain technology, customer experience systems, and retail analytics. From Shopify to SAP, our talent delivers seamless shopping experiences.",
    image: retailImage,
  },
  {
    id: "automotive",
    title: "Automotive & Mobility",
    subtitle: "Smart Manufacturing & Connected Vehicles",
    description:
      "Driving the future of mobility with expertise in connected vehicles, autonomous systems, EV technology, and smart manufacturing. Our engineers support Industry 4.0 initiatives across the automotive value chain.",
    image: autoImage,
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Medical Technology Innovation",
    description:
      "Advancing healthcare with expertise in health informatics, medical devices, pharmaceutical R&D, and regulatory compliance. Our talent understands HIPAA, FDA requirements, and clinical trial management.",
    image: healthcareImage,
  },
  {
    id: "telecom",
    title: "Telecommunications",
    subtitle: "Network Infrastructure Solutions",
    description:
      "Connecting the world with expertise in 5G, network infrastructure, OSS/BSS, and telecommunications software. Our professionals support carriers, equipment manufacturers, and service providers globally.",
    image: telecomImage,
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    subtitle: "Digital Transformation Services",
    description:
      "Enabling digital transformation with expertise across cloud, AI/ML, data engineering, and enterprise architecture. Our consultants partner with leading technology firms to deliver complex transformation programs.",
    image: connectivityImage,
  },
];

export default function Industries() {
  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-industries">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Deep Domain Expertise Across Sectors
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We bring specialized knowledge and proven talent solutions to the industries driving global innovation and economic growth.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
              data-testid={`industry-${industry.id}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className="text-primary font-semibold text-sm">{industry.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1 mb-4">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{industry.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {industry.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={handleContactClick}
                  data-testid={`button-industry-contact-${industry.id}`}
                >
                  Discuss Your Needs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
