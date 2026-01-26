import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { FadeIn, FadeInUp, SlideInRight } from "@/components/AnimatedSection";
import connectivityImage from "@assets/generated_images/global_tech_connectivity_abstract.png";



const leadershipTeam = [
  {
    name: "",
    role: "",
    bio: "Hawkstone is redefining the way businesses scale technology teams. We bring together world-class talent, deep industry expertise, and modern delivery models to help companies transform with confidence. Our global-to-local staffing approach ensures adaptability, speed, and quality—while our customer-first mindset enables us to deliver meaningful outcomes, every time.",
    focus: "Global Strategy • Client Experience",
    image: "@assets/generated_images/vikas.jpg",
  },
];

const clientLogos = [
  "Global Investment Bank",
  "Leading E-Commerce Platform",
  "Fortune 500 Retailer",
  "Telecom Enterprise",
  "FinTech Leader",
  "Automotive Group",
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <span className="text-primary font-semibold text-lg uppercase tracking-wider">About Us</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                  Powering Global Digital Transformation
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hawkstone Global Software Pvt Ltd is a premier technology talent acquisition, consulting, and digital engineering solutions company with a truly global footprint. Operating across the UK, Europe, USA, and India, we specialize in connecting world-class technology professionals with innovative organizations driving the future of business.
                  </p>
                  <p>
                    With over 15 years of industry experience, we have built deep expertise across multiple technology domains and industry verticals. Our comprehensive service portfolio spans contract and temporary staffing, permanent recruitment, offshore and nearshore delivery centers, managed services, and executive-level hiring.
                  </p>
                  <p>
                    What sets us apart is our unique combination of global reach and local expertise. Our dedicated teams in each region understand the nuances of local markets while leveraging our international network to deliver optimal solutions for every client engagement.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg" data-testid="button-about-contact">
                      Partner With Us
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            <SlideInRight>
              <div className="relative">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={connectivityImage}
                    alt="Global technology connectivity"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-sm opacity-90"> of Excellence</div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-about-client-logos">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                
              </h2>
            </div>
          </FadeInUp>

          <FadeIn>
            <div className="overflow-hidden rounded-xl bg-background/60 backdrop-blur-sm">
              <div className="py-6">
                <div className="flex w-max gap-6 animate-[marquee_22s_linear_infinite] motion-reduce:animate-none">
                  {[...clientLogos, ...clientLogos].map((name, idx) => (
                    <div
                      key={`${name}-${idx}`}
                      className="h-14 px-8 flex items-center justify-center rounded-lg bg-muted/60 text-foreground/70 text-sm font-semibold tracking-wide whitespace-nowrap"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <button className="inline-block text-[#FFB000] font-semibold text-sm uppercase tracking-wider bg-blue-900 px-6 py-3 rounded-full hover:bg-blue-800 transition-colors cursor-pointer shadow-lg mb-4">
                Why Choose Us
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Hawkstone Advantage
              </h2>
              <p className="text-muted-foreground">
                What sets us apart is our unwavering commitment to quality, speed, and value. Here's why leading enterprises choose Hawkstone Global Software.
              </p>
            </div>
          </FadeInUp>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Specialist Talent Solutions Across the UK & Europe</h3>
              <p className="text-muted-foreground">
                We provide access to highly skilled, pre-vetted professionals across IT, Digital, Engineering, and Business functions, aligned with UK hiring standards and regulatory requirements.
              </p>
            </FadeIn>

            <FadeIn className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" delay={0.1}>
              <h3 className="text-xl font-semibold mb-3">Flexible Permanent, Contract and Interim Hiring</h3>
              <p className="text-muted-foreground">
                Our recruitment solutions are designed to support both immediate project demands and long-term workforce planning through permanent, contract, and interim staffing models.
              </p>
            </FadeIn>

            <FadeIn className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" delay={0.2}>
              <h3 className="text-xl font-semibold mb-3">Proven Experience with Direct Clients and MSP/VMS Models</h3>
              <p className="text-muted-foreground">
                Extensive experience partnering with direct end clients and operating within leading MSP and VMS frameworks, including Fieldglass, Beeline, and IQN.
              </p>
            </FadeIn>

            <FadeIn className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" delay={0.3}>
              <h3 className="text-xl font-semibold mb-3">Fast, Compliant and Scalable Recruitment Delivery</h3>
              <p className="text-muted-foreground">
                We ensure timely candidate delivery while maintaining full compliance with UK employment legislation, IR35, GDPR, and right-to-work obligations.
              </p>
            </FadeIn>

            <FadeIn className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" delay={0.4}>
              <h3 className="text-xl font-semibold mb-3">Sector-Focused Recruitment Expertise</h3>
              <p className="text-muted-foreground">
                Trusted recruitment partner to organisations across Banking, FinTech, Technology, Telecommunications, Automotive, Retail, and large enterprise environments.
              </p>
            </FadeIn>

            <FadeIn className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" delay={0.5}>
              <h3 className="text-xl font-semibold mb-3">A Partnership-Led Approach</h3>
              <p className="text-muted-foreground">
                We focus on building long-term client relationships through transparency, quality delivery, and measurable recruitment outcomes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground" data-testid="section-about-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Hawkstone Global Software can help accelerate your technology initiatives.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" data-testid="button-about-cta">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>

      <style>
        {`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}
      </style>
    </PageLayout>
  );
}
