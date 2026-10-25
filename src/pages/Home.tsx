import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, CheckCircle, Clock } from 'lucide-react';
import { Section, SectionHeading, ServiceCard, ProjectCard, ArticleCard, CTASection } from '../components/UI';
import { StatsSection } from '../components/AnimatedCounter';
import { MagneticButton } from '../components/InteractiveElements';
import { services, projects, articles, methodology } from '../data/content';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section - Billion Dollar Consultancy Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-graphite">
        {/* Hero Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1764449321624-913ca52646c6?auto=format&fit=crop&w=1920&q=80"
            alt="Construction site with cranes and bridge infrastructure"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-graphite/85" />
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/90 via-graphite/70 to-graphite-light/80" />
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
          {/* Radial glow */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-steel/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-steel/3 rounded-full blur-[100px]" />
        </motion.div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-steel" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-steel font-medium">
                  Multidisciplinary Engineering
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-ivory leading-[1.05] mb-8 tracking-tight">
                Engineering the
                <br />
                <span className="text-steel">Infrastructure</span>
                <br />
                of Tomorrow
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-ivory/80 max-w-2xl mb-12 leading-relaxed font-light">
                Integrated engineering, industrial systems and infrastructure solutions designed for lasting performance across West Africa.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group bg-steel text-graphite px-10 py-5 font-semibold rounded-sm hover:bg-steel-dark transition-all duration-300 text-center inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:scale-105"
                  >
                    Discuss Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/services"
                    className="group border-2 border-ivory/30 text-ivory px-10 py-5 font-semibold rounded-sm hover:border-steel hover:bg-steel/5 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Explore Capabilities
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right Column - Stats/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-steel/20 rounded-sm" />
                <div className="absolute -inset-8 border border-steel/10 rounded-sm" />
                
                {/* Stats card */}
                <div className="relative bg-graphite-light/50 backdrop-blur-sm border border-ivory/10 rounded-sm p-8 space-y-8">
                  <div>
                    <div className="font-heading text-5xl font-bold text-steel mb-2">10+</div>
                    <div className="text-ivory/70 text-sm uppercase tracking-wider">Years of Excellence</div>
                  </div>
                  <div className="h-px bg-ivory/10" />
                  <div>
                    <div className="font-heading text-5xl font-bold text-steel mb-2">150+</div>
                    <div className="text-ivory/70 text-sm uppercase tracking-wider">Projects Delivered</div>
                  </div>
                  <div className="h-px bg-ivory/10" />
                  <div>
                    <div className="font-heading text-5xl font-bold text-steel mb-2">6</div>
                    <div className="text-ivory/70 text-sm uppercase tracking-wider">Engineering Disciplines</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-steel to-transparent" />
      </section>

      {/* Stats Section */}
      <Section className="bg-white border-b border-ivory-dark">
        <StatsSection
          stats={[
            { value: 10, suffix: '+', label: 'Years of Experience' },
            { value: 150, suffix: '+', label: 'Projects Delivered' },
            { value: 6, label: 'Engineering Disciplines' },
            { value: 95, suffix: '%', label: 'Client Retention' },
          ]}
        />
      </Section>

      {/* Company Introduction */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Who We Are"
              title="Integrated Engineering Under One Roof"
              description="VANTAGE Engineering brings together civil, structural, mechanical, electrical, industrial, and infrastructure disciplines. We coordinate the full engineering scope so clients work with one team from feasibility through handover."
            />
            <p className="text-structural leading-relaxed mb-6">
              Founded in 2014, we identified a recurring challenge: clients coordinating independent consultants, contractors, and suppliers without integrated technical oversight. Our model addresses this by providing coordinated engineering delivery across disciplines.
            </p>
            <p className="text-structural leading-relaxed mb-8">
              We serve commercial developers, manufacturers, logistics operators, and institutional clients across Lagos, Abuja, Port Harcourt, and selected West African markets.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-steel-dark font-medium hover:gap-3 transition-all">
              Learn about our approach <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8961070/pexels-photo-8961070.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Engineers discussing a construction project in PPE"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-graphite text-ivory p-6 rounded-sm shadow-xl max-w-[200px]">
              <span className="font-heading text-3xl font-bold text-steel">10+</span>
              <p className="text-sm text-ivory/70 mt-1">Years of multidisciplinary engineering delivery</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Six Engineering Disciplines, One Coordinated Approach"
          description="From structural design to energy systems, we deliver integrated engineering services tailored to Nigerian and West African conditions."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </Section>

      {/* Selected Projects */}
      <Section dark>
        <SectionHeading
          eyebrow="Selected Projects"
          title="Delivering Complex Engineering Outcomes"
          description="Illustrative project case studies demonstrating our integrated approach across commercial, industrial, energy, and infrastructure sectors."
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-steel font-medium hover:gap-3 transition-all">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Methodology */}
      <Section>
        <SectionHeading
          eyebrow="Our Process"
          title="Seven Stages of Engineering Delivery"
          description="Every project follows a structured methodology from initial discovery through handover and support."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {methodology.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-white border border-ivory-dark p-5 rounded-sm"
            >
              <span className="font-mono text-xs text-steel-dark font-medium">0{step.stage}</span>
              <h3 className="font-heading font-semibold text-graphite text-sm mt-2 mb-2">{step.title}</h3>
              <p className="text-structural text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/our-process" className="inline-flex items-center gap-2 text-steel-dark font-medium hover:gap-3 transition-all">
            Explore our full methodology <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Engineering Principles */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Engineering Principles"
          title="Built on Technical Rigour"
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: 'Safety & Accountability', desc: 'Safety planning, risk assessment, and clear responsibility central to every project.' },
            { icon: Target, title: 'Technical Integrity', desc: 'Recommendations supported by engineering analysis, standards, and professional review.' },
            { icon: CheckCircle, title: 'Quality Assurance', desc: 'Documented quality control, inspection procedures, and verification at every stage.' },
            { icon: Clock, title: 'Lifecycle Performance', desc: 'Designed for operational life, maintainability, and long-term value.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-steel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-steel-dark" />
              </div>
              <h3 className="font-heading font-semibold text-graphite mb-2">{item.title}</h3>
              <p className="text-structural text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section>
        <SectionHeading
          eyebrow="Insights"
          title="Engineering Knowledge"
          description="Technical articles on power reliability, maintenance planning, and stormwater management."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to Discuss Your Project?"
        description="Tell us about your engineering requirements. We'll review your brief and respond within one business day."
        primaryText="Start a Conversation"
        primaryTo="/contact"
        secondaryText="Explore our services"
        secondaryTo="/services"
      />
    </>
  );
}
