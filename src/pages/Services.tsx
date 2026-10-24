import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Section, SectionHeading, ServiceCard, Breadcrumbs, CTASection } from '../components/UI';
import { services } from '../data/content';

export function ServicesOverview() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/12157172/pexels-photo-12157172.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel mb-4 block">Our Services</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ivory max-w-3xl">
              Integrated Engineering Capabilities
            </h1>
            <p className="text-ivory/70 text-lg mt-4 max-w-2xl">
              Six engineering disciplines coordinated under one delivery approach, from feasibility through handover.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-graphite mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-structural mb-6">
            Many projects require coordination across multiple disciplines. Tell us about your requirements and we'll recommend the right approach.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-steel text-graphite px-8 py-3.5 font-semibold rounded hover:bg-steel-dark transition-colors">
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="font-heading text-2xl font-bold text-graphite mb-4">Service Not Found</h1>
          <Link to="/services" className="text-steel-dark hover:underline">View all services</Link>
        </div>
      </Section>
    );
  }

  const otherServices = services.filter(s => s.id !== service.id);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-graphite/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.shortTitle }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel mb-4 block">Service</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-ivory max-w-3xl">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-structural leading-relaxed mb-8">{service.description}</p>
            
            <h2 className="font-heading text-2xl font-bold text-graphite mb-6">Capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {service.capabilities.map(cap => (
                <div key={cap} className="flex items-start gap-3 p-3 bg-white border border-ivory-dark rounded-sm">
                  <Check size={16} className="text-steel-dark mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-graphite">{cap}</span>
                </div>
              ))}
            </div>

            <div className="bg-ivory-dark/50 border border-ivory-dark rounded-sm p-6">
              <h3 className="font-heading font-semibold text-graphite mb-2">Service Delivery Note</h3>
              <p className="text-structural text-sm leading-relaxed">
                Services are delivered by qualified VANTAGE staff where within our direct capability, coordinated by our team where specialist input is required, and supported through qualified external professionals where specific licensing or certification is needed. We are transparent about which services we deliver directly and which require coordination.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6">
                <img src={service.image} alt={service.imageAlt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="bg-graphite text-ivory p-6 rounded-sm">
                <h3 className="font-heading font-semibold text-lg mb-3">Discuss This Service</h3>
                <p className="text-ivory/70 text-sm mb-4">Tell us about your project requirements and we'll advise on the right approach.</p>
                <Link to="/contact" className="block text-center bg-steel text-graphite px-6 py-3 font-semibold rounded hover:bg-steel-dark transition-colors text-sm">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Services */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Other Services" title="Explore Our Full Capabilities" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Start?"
        description="Discuss your engineering requirements with our team."
        primaryText="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}
