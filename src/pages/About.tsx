import { motion } from 'framer-motion';
import { Section, SectionHeading, Breadcrumbs } from '../components/UI';
import { StatsSection } from '../components/AnimatedCounter';
import { team, principles } from '../data/content';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8961070/pexels-photo-8961070.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Engineers discussing a construction project in PPE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-graphite/75" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/80 via-graphite/60 to-graphite-light/70" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-steel/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-steel" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-steel font-medium">About Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-ivory max-w-3xl leading-[1.05] tracking-tight">
              Engineering Progress.<br />
              <span className="text-steel">Building Possibility.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our Story" title="Built on a Clear Engineering Vision" />
            <div className="space-y-4 text-structural leading-relaxed">
              <p>
                VANTAGE Engineering was established in 2014 by a group of Nigerian engineers who identified a recurring challenge in construction and industrial development: clients often had to coordinate independent consultants, contractors, equipment suppliers, and project managers without one team integrating the entire project.
              </p>
              <p>
                The founders envisioned an engineering company that could bring together feasibility studies, engineering design, technical procurement, construction coordination, commissioning, and maintenance planning under a single delivery approach.
              </p>
              <p>
                The company initially focused on commercial building services and small industrial installations. It later expanded into civil infrastructure, electrical and mechanical systems, water management, renewable-energy integration, and industrial facility development.
              </p>
              <p>
                Today, VANTAGE Engineering serves property developers, manufacturing companies, logistics operators, commercial organizations, public institutions, and infrastructure investors across Lagos, Abuja, Port Harcourt, Ibadan, Kano, and selected West African markets.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8961070/pexels-photo-8961070.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Engineers collaborating at a construction site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-heading text-2xl font-bold text-graphite mb-4">Our Mission</h2>
            <p className="text-structural leading-relaxed text-lg">
              To deliver reliable engineering solutions that help organizations build safer facilities, operate more efficiently, and develop infrastructure that performs over the long term.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-graphite mb-4">Our Vision</h2>
            <p className="text-structural leading-relaxed text-lg">
              To become a trusted West African engineering partner recognized for technical excellence, responsible infrastructure development, and dependable project delivery.
            </p>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <SectionHeading eyebrow="Operating Philosophy" title="Five Engineering Principles" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-ivory-dark p-6 rounded-sm"
            >
              <span className="font-mono text-xs text-steel-dark">0{i + 1}</span>
              <h3 className="font-heading font-semibold text-graphite mt-2 mb-2">{p.title}</h3>
              <p className="text-structural text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Core Values" title="What Guides Our Work" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Technical Integrity', desc: 'Recommendations supported by engineering analysis, applicable standards, documented assumptions, and qualified professional review.' },
            { title: 'Safety & Accountability', desc: 'Safety planning, risk assessment, quality control, and clear responsibility are central to every project.' },
            { title: 'Sustainable Thinking', desc: 'Prioritize resource efficiency, durability, responsible material selection, and maintainable systems.' },
            { title: 'Collaboration', desc: 'Coordinate clients, consultants, suppliers, and contractors through clear communication and defined interfaces.' },
            { title: 'Continuous Improvement', desc: 'Learn from project outcomes and improve technical and operational processes over time.' },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="font-heading font-semibold text-graphite mb-2">{v.title}</h3>
              <p className="text-structural text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(183, 213, 229, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(183, 213, 229, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative">
          <StatsSection
            stats={[
              { value: 10, suffix: '+', label: 'Years of Experience' },
              { value: 150, suffix: '+', label: 'Projects Delivered' },
              { value: 6, label: 'Engineering Disciplines' },
              { value: 5, label: 'Service Regions' },
            ]}
            dark
          />
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <SectionHeading eyebrow="Leadership" title="Our Team" description="The senior professionals guiding VANTAGE Engineering's technical and operational direction." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-ivory-dark p-6 rounded-sm card-hover group"
            >
              <div className="w-16 h-16 bg-steel/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-steel/40 transition-colors duration-300">
                <span className="font-heading text-xl font-bold text-steel-dark">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-graphite group-hover:text-steel-dark transition-colors duration-300">{member.name}</h3>
              <p className="text-steel-dark text-sm font-medium mb-3">{member.title}</p>
              <p className="text-structural text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Organization */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Structure" title="Organizational Structure" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {[
            'Office of the Managing Director',
            'Engineering and Technical Services',
            'Civil and Structural Engineering',
            'Mechanical and Electrical Engineering',
            'Industrial Systems and Energy',
            'Project Delivery and Site Operations',
            'Procurement and Supply Chain',
            'Finance and Administration',
            'Health, Safety, Environment and Quality (HSEQ)',
            'Business Development and Client Relations',
          ].map((dept, i) => (
            <motion.div
              key={dept}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 p-3 border border-ivory-dark rounded-sm"
            >
              <div className="w-2 h-2 bg-steel rounded-full flex-shrink-0" />
              <span className="text-sm text-graphite">{dept}</span>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
