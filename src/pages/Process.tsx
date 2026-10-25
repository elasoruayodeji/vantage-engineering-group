import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading, Breadcrumbs, CTASection } from '../components/UI';
import { methodology } from '../data/content';

export default function Process() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.pexels.com/photos/8961070/pexels-photo-8961070.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Our Process' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel mb-4 block">Methodology</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ivory max-w-3xl">
              Our Engineering Process
            </h1>
            <p className="text-ivory/70 text-lg mt-4 max-w-2xl">
              Every project follows a structured seven-stage methodology from initial discovery through handover and support.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {methodology.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-steel/10 border-2 border-steel rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-sm font-bold text-steel-dark">0{step.stage}</span>
                </div>
                {i < methodology.length - 1 && (
                  <div className="w-0.5 flex-1 bg-ivory-dark mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-2">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-graphite mb-3">{step.title}</h2>
                <p className="text-structural leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Why This Approach" title="Structured Delivery, Clear Accountability" />
          <div className="space-y-4 text-structural leading-relaxed">
            <p>
              Our seven-stage process exists because engineering projects succeed or fail based on how well requirements are understood, how thoroughly options are assessed, how carefully designs are coordinated, and how consistently quality is maintained through implementation.
            </p>
            <p>
              Each stage has defined inputs, deliverables, and decision points. Clients know what to expect at each phase, what documentation they will receive, and where their input is required. Variations are documented, approvals are recorded, and progress is reported against agreed baselines.
            </p>
            <p>
              This structured approach does not mean rigid or inflexible delivery. It means that when changes are necessary—as they often are in complex projects—they are managed deliberately with clear understanding of their impact on scope, schedule, and cost.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to Begin?"
        description="Tell us about your project and we'll outline how our process applies to your specific requirements."
        primaryText="Discuss Your Project"
        primaryTo="/contact"
        secondaryText="View our services"
        secondaryTo="/services"
      />
    </>
  );
}
