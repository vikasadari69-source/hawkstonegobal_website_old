import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Users, UserPlus, Award, BarChart, Search, Briefcase, CheckCircle, ChevronDown, Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { heroContent, servicesContent, statsContent, aboutContent, whyChooseContent, faqContent, ctaContent, testimonialsContent } from "@/siteContent";
import heroImage from "@assets/generated_images/corporate_team.png";
import aboutImage from "@assets/generated_images/office_meeting_2.jpg";
import officeImage1 from "@assets/generated_images/corporate_team_collaboration_hero.jpg";
import officeImage2 from "@assets/generated_images/office_meeting_1.jpg";
import officeImage3 from "@assets/generated_images/IMG-20251210-WA0024.jpg";
import officeImage4 from "@assets/generated_images/office_meeting_2.jpg";
// Additional unique images for different sections - using local images
import careersImage from "@assets/generated_images/Empowering Careers, Building Futures.jpeg";
import recruitmentImage from "@assets/generated_images/Recruitment Solutions Tailored to Your Needs.jpg";
import resultsImage from "@assets/generated_images/Driven by Results, Powered by People.jpg";
import growthImage from "@assets/generated_images/Expert Hiring Services to Drive Your Growth.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  userPlus: UserPlus,
  award: Award,
  barChart: BarChart,
  search: Search,
  briefcase: Briefcase,
};

function useIntersectionObserver(options = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function HeroCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`hero-card interactive-box ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) rotate(0)" : "translateY(30px) rotate(-2deg)",
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        setOffset(scrollY * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);

  return (
    <PageLayout>
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-screen gradient-hero overflow-hidden"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-animated-bg" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <div className="gradient-line" style={{ left: "10%", top: "20%" }} />
          <div className="gradient-line" style={{ left: "30%", top: "40%", transform: "rotate(45deg)" }} />
          <div className="gradient-line" style={{ right: "20%", top: "10%", transform: "rotate(-30deg)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-64 pb-32">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-center" style={{ color: '#FFFFFF' }}>
              {heroContent.headline}
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-16 max-w-4xl mx-auto" style={{ color: '#F0F0F0', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              {heroContent.subheadline}
            </p>

            <div className="flex justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#F4B000] text-[#071A46] font-semibold text-lg rounded-full hover:bg-[#F4B000]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {heroContent.primaryCta}
                </button>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* 4-Card Single Row Layout */}
      <section className="py-20 md:py-28 bg-gray-50" data-testid="section-single-row-layout">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {/* Card 1 - Fast Talent Delivery */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50/80 to-blue-100/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2" style={{ height: '500px' }}>
              {/* Top Section - Content */}
              <div className="h-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/10" />
                <div className="relative p-6 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#071A46] mb-3">Fast Talent Delivery</h3>
                  <p className="text-sm text-[#0A2C68]/80 leading-relaxed">
                    Receive shortlisted, interview-ready candidates within 24–72 hours.
                  </p>
                </div>
              </div>

              {/* Bottom Section - Image */}
              <div className="h-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${officeImage1})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
            </div>

            {/* Card 2 - Precision Matching (Split) */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50/80 to-blue-100/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2" style={{ height: '500px' }}>
              {/* Top Section - Image */}
              <div className="h-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${officeImage2})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
              </div>

              {/* Bottom Section - Content */}
              <div className="h-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/10" />
                <div className="relative p-6 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#071A46] mb-3">Precision Matching</h3>
                  <p className="text-sm text-[#0A2C68]/80 leading-relaxed mb-2">
                    AI-powered sourcing + industry-expert recruiters ensure accurate role-fit.
                  </p>
                  <p className="text-sm text-[#0A2C68]/80 leading-relaxed font-medium">

                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - UK & EU Compliance */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50/80 to-blue-100/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2" style={{ height: '500px' }}>
              {/* Top Section - Content */}
              <div className="h-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/10" />
                <div className="relative p-6 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#071A46] mb-3">Specialised in UK & EU Talent Compliance</h3>
                  <p className="text-sm text-[#0A2C68]/80 leading-relaxed">
                    Fully compliant hiring across UK & EU, including right-to-work, GDPR, and IR35.
                  </p>
                </div>
              </div>

              {/* Bottom Section - Image */}
              <div className="h-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${officeImage3})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
            </div>

            {/* Card 4 - End-to-End Recruitment Support (Split) */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50/80 to-blue-100/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2" style={{ height: '500px' }}>
              {/* Top Section - Image */}
              <div className="h-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${officeImage4})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
              </div>

              {/* Bottom Section - Content */}
              <div className="h-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/10" />
                <div className="relative p-6 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#071A46] mb-3">End-to-End Recruitment Support</h3>
                  <p className="text-sm text-[#0A2C68]/80 leading-relaxed">
                    From sourcing to onboarding — we manage the entire hiring process.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#072A53' }}>
              {servicesContent.sectionTitle}
            </h2>
            <p className="text-lg" style={{ color: '#072A53' }}>
              {servicesContent.sectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesContent.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Users;
              return (
                <ServiceCard
                  key={service.title}
                  icon={IconComponent}
                  title={service.title}
                  description={service.description}
                  cta={service.cta}
                  delay={index * 100}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={careersImage} alt="Career growth" className="rounded-2xl shadow-xl" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {aboutContent.sectionTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {aboutContent.sectionSubtitle}
              </p>

              <Link href="/about">
                <button className="px-8 py-4 bg-[#F4B000] text-white font-semibold text-lg rounded-full hover:bg-[#F4B000]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-12">
                  {aboutContent.cta}
                </button>
              </Link>

              <div className="space-y-6">
                {aboutContent.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FFB000]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#072A53]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {whyChooseContent.sectionTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {whyChooseContent.sectionSubtitle}
              </p>

              <Link href="/about">
                <button className="px-8 py-4 bg-[#F4B000] text-white font-semibold text-lg rounded-full hover:bg-[#F4B000]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-8">
                  {whyChooseContent.cta}
                </button>
              </Link>

              <div className="space-y-4">
                {whyChooseContent.benefits.map((benefit, index) => (
                  <BenefitItem key={index} text={benefit} delay={index * 100} />
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={recruitmentImage} alt="Recruitment solutions" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 gradient-hero" data-testid="section-outcomes">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {statsContent.stats.slice(0, 3).map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 150} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Driven by Results, Powered by People
              </h2>
              <p className="text-lg mb-8 text-white">
                Your career is our priority. We take the time to understand your goals and match you with the perfect role, ensuring a seamless transition into your next opportunity.
              </p>
              <Link href="/about">
                <button className="px-8 py-4 bg-[#F4B000] text-white font-semibold text-lg rounded-full hover:bg-[#F4B000]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View All Case Studies
                </button>
              </Link>
            </div>

            <div className="bg-[#eeeeee] border border-white/10 rounded-2xl overflow-hidden">
              <img src={resultsImage} alt="Case study" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Scaling Temporary Workforce for Manufacturing Clients
                </h3>
                <p className="text-sm mb-4" style={{ color: '#FFFFFF !important' }}>
                  Demonstrated capacity to meet urgent needs of a manufacturing client by providing temporary staff quickly and efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#FFB000]/20 text-[#353535] text-xs rounded-full">Fulfillment</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-[#353535] text-xs rounded-full">Temporary Staffing</span>
                  <span className="px-3 py-1 bg-green-500/20 text-[#353535] text-xs rounded-full">On-demand workforce</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-12 border-t border-white/10">
            <div className="inline-block bg-[#0F1A21] border border-[#FFB000]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#FFB000] font-semibold">We Find Top 100% Talent</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We take the time to understand your goals and match you with the perfect role, ensuring a seamless transition into your next opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {testimonialsContent.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {testimonialsContent.sectionSubtitle}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 max-w-4xl mx-auto text-center">
              "{testimonialsContent.testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300" />
              <div>
                <div className="font-semibold text-gray-900">{testimonialsContent.testimonials[0].author}</div>
                <div className="text-sm text-gray-500">{testimonialsContent.testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50" data-testid="section-faq">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {faqContent.sectionTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {faqContent.sectionSubtitle}
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#F4B000] text-white font-semibold text-lg rounded-full hover:bg-[#F4B000]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Try Recruitment Process
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              {faqContent.faqs.slice(0, 6).map((faq, index) => (
                <FaqItem
                  key={index}
                  id={`faq-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 gradient-hero" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {ctaContent.title}
              </h2>
              <p className="text-lg text-white mb-8">
                {ctaContent.subtitle}
              </p>
              <Link href="/contact">
                <button className="btn-primary mb-6">
                  {ctaContent.primaryCta}
                </button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#ffffff] border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#FFB000]/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#FFB000]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white"></div>
                    <div className="text-gray-400"></div>
                  </div>
                </div>
                <img src={growthImage} alt="Success" className="w-full h-64 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  cta,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  cta: string;
  delay?: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="service-card interactive-box bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-[#FFB000]/30 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-[#FFB000]" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link href="/services">
        <span className="inline-flex items-center text-[#FFB000] font-medium text-sm hover:underline">
          {cta}
          <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </Link>
    </div>
  );
}

function StatCard({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="stat-card interactive-box text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      <p className="text-sm mb-2" style={{ color: '#072A53' }}>{label}</p>
      <div className="text-4xl md:text-5xl font-bold" style={{ color: '#072A53' }}>
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
    </div>
  );
}

function BenefitItem({ text, delay = 0 }: { text: string; delay?: number }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex items-center gap-3"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      <CheckCircle className="w-5 h-5 text-[#072A53] flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const contentId = `faq-content-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="faq-item interactive-box border border-gray-200 rounded-xl overflow-hidden">
      <button
        id={buttonId}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB000] focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "300px" : "0" }}
      >
        <p className="p-4 pt-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
}
