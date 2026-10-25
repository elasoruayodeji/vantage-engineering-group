import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, DollarSign } from 'lucide-react';
import { Section, SectionHeading, ProjectCard, Breadcrumbs, CTASection } from '../components/UI';
import { projects, services } from '../data/content';

const categories = ['All', 'Commercial', 'Industrial', 'Energy', 'Infrastructure', 'Residential'] as const;

export function ProjectsOverview() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1763798709709-ef54e8bad856?auto=format&fit=crop&w=1800&q=80"
            alt="Bridge infrastructure under construction"
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
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Projects' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-steel" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-steel font-medium">Project Portfolio</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-ivory max-w-3xl leading-[1.05] tracking-tight">
              Illustrative Project
              <br />
              <span className="text-steel">Case Studies</span>
            </h1>
            <p className="text-ivory/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Representative projects demonstrating our integrated engineering approach across sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                activeFilter === cat
                  ? 'bg-graphite text-ivory'
                  : 'bg-white border border-ivory-dark text-structural hover:border-structural'
              }`}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-structural">No projects found in this category.</p>
          </div>
        )}
      </Section>
    </>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="font-heading text-2xl font-bold text-graphite mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-steel-dark hover:underline">View all projects</Link>
        </div>
      </Section>
    );
  }

  const relatedServices = services.filter(s => project.serviceIds.includes(s.id));
  const otherProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-graphite/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/80 via-graphite/50 to-graphite-light/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Projects', to: '/projects' }, { label: project.title }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel bg-steel/10 px-3 py-1 rounded">{project.category}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-ivory max-w-3xl mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-ivory/70 text-sm">
              <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
              <span className="flex items-center gap-1"><DollarSign size={14} /> Illustrative value: {project.contractValue}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-sm overflow-hidden mb-10">
              <img src={project.image} alt={project.imageAlt} className="w-full h-full object-cover" loading="lazy" />
              <p className="text-xs text-structural mt-2 italic">Illustrative image — representative project type, not a verified VANTAGE project photograph.</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-xl font-bold text-graphite mb-3">Project Scope</h2>
                <p className="text-structural leading-relaxed">{project.scope}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-graphite mb-3">Key Challenge</h2>
                <p className="text-structural leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-graphite mb-3">Deliverable / Outcome</h2>
                <p className="text-structural leading-relaxed">{project.outcome}</p>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div className="mt-10 pt-8 border-t border-ivory-dark">
                <h2 className="font-heading text-lg font-bold text-graphite mb-4">Related Services</h2>
                <div className="flex flex-wrap gap-2">
                  {relatedServices.map(s => (
                    <Link key={s.id} to={`/services/${s.slug}`} className="px-4 py-2 bg-white border border-ivory-dark rounded-sm text-sm text-graphite hover:border-steel transition-colors">
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-ivory-dark p-6 rounded-sm">
                <h3 className="font-heading font-semibold text-graphite mb-4">Project Summary</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-structural uppercase tracking-wider">Location</dt>
                    <dd className="text-sm text-graphite font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-structural uppercase tracking-wider">Category</dt>
                    <dd className="text-sm text-graphite font-medium">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-structural uppercase tracking-wider">Illustrative Value</dt>
                    <dd className="text-sm text-graphite font-medium">{project.contractValue}</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-graphite text-ivory p-6 rounded-sm">
                <h3 className="font-heading font-semibold text-lg mb-3">Similar Project?</h3>
                <p className="text-ivory/70 text-sm mb-4">Discuss your engineering requirements with our team.</p>
                <Link to="/contact" className="block text-center bg-steel text-graphite px-6 py-3 font-semibold rounded hover:bg-steel-dark transition-colors text-sm">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Projects */}
      <Section className="bg-white">
        <SectionHeading eyebrow="More Projects" title="Related Case Studies" />
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Have a Similar Project?"
        description="We coordinate complex engineering scopes across multiple disciplines. Let's discuss your requirements."
        primaryText="Start a Conversation"
        primaryTo="/contact"
      />
    </>
  );
}
