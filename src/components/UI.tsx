
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Service, Project, Article } from '../data/content';

// Section wrapper
export function Section({ children, className = '', dark = false, id }: { children: React.ReactNode; className?: string; dark?: boolean; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${dark ? 'bg-graphite text-ivory' : 'bg-ivory'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// Section heading
export function SectionHeading({ eyebrow, title, description, center = false, light = false }: { eyebrow?: string; title: string; description?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className={`font-mono text-xs uppercase tracking-[0.15em] ${light ? 'text-steel' : 'text-structural'} mb-3 block`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-ivory' : 'text-graphite'} mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? 'text-ivory/70' : 'text-structural'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

// Service card
export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover"
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block bg-white border border-ivory-dark rounded-sm overflow-hidden h-full relative"
      >
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 relative">
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-steel group-hover:w-full transition-all duration-500" />
          <h3 className="font-heading text-xl font-semibold text-graphite mb-2 group-hover:text-steel-dark transition-colors duration-300">
            {service.shortTitle}
          </h3>
          <p className="text-structural text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-steel-dark mt-4 group-hover:gap-3 transition-all duration-300">
            Learn more <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// Project card
export function ProjectCard({ project, index = 0, featured = false }: { project: Project; index?: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={featured ? 'lg:col-span-2' : ''}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block relative overflow-hidden rounded-sm h-full"
      >
        <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9] lg:aspect-[2/1]' : 'aspect-[4/3]'}`}>
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/30 to-transparent group-hover:via-graphite/40 transition-all duration-500" />
          <div className="absolute inset-0 border-2 border-steel/0 group-hover:border-steel/30 rounded-sm transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-steel uppercase tracking-wider">{project.category}</span>
              <span className="text-ivory/30">·</span>
              <span className="text-xs text-ivory/60">{project.location}</span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-ivory mb-2 group-hover:text-steel transition-colors duration-300">
              {project.title}
            </h3>
            {!featured && (
              <p className="text-ivory/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.scope}</p>
            )}
            <span className="inline-flex items-center gap-1 text-sm font-medium text-steel mt-3 group-hover:gap-3 transition-all duration-300">
              View project <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Article card
export function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover"
    >
      <Link
        to={`/insights/${article.slug}`}
        className="group block bg-white border border-ivory-dark rounded-sm overflow-hidden h-full relative"
      >
        <div className="aspect-[16/9] overflow-hidden relative">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 relative">
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-steel group-hover:w-full transition-all duration-500" />
          <div className="flex items-center gap-3 text-xs text-structural mb-3">
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="font-heading text-lg font-semibold text-graphite mb-2 group-hover:text-steel-dark transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-structural text-sm line-clamp-2">{article.excerpt}</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-steel-dark mt-4 group-hover:gap-3 transition-all duration-300">
            Read article <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// Breadcrumbs
export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-structural">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={12} className="text-structural-light" />}
            {item.to ? (
              <Link to={item.to} className="hover:text-steel-dark transition-colors">{item.label}</Link>
            ) : (
              <span className="text-graphite font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// CTA Section
export function CTASection({ title, description, primaryText, primaryTo, secondaryText, secondaryTo }: { title: string; description: string; primaryText: string; primaryTo: string; secondaryText?: string; secondaryTo?: string }) {
  return (
    <Section dark className="relative overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite-light to-graphite" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4 leading-tight tracking-tight">{title}</h2>
          <p className="text-ivory/70 text-lg mb-8 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to={primaryTo} 
              className="bg-steel text-graphite px-10 py-5 font-semibold rounded-sm hover:bg-steel-dark transition-all hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {primaryText}
            </Link>
            {secondaryText && secondaryTo && (
              <Link to={secondaryTo} className="text-ivory/80 hover:text-steel font-medium transition-colors flex items-center gap-2 group">
                {secondaryText} 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Image with fallback
export function SafeImage({ src, alt, className = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-ivory-dark flex items-center justify-center ${className}`}>
        <span className="text-structural text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}

import { useState } from 'react';
