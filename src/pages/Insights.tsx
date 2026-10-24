import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Section, SectionHeading, ArticleCard, Breadcrumbs, CTASection } from '../components/UI';
import { ReadingProgress } from '../components/ReadingProgress';
import { articles, services } from '../data/content';

export function InsightsList() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel mb-4 block">Engineering Insights</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ivory max-w-3xl">
              Technical Knowledge
            </h1>
            <p className="text-ivory/70 text-lg mt-4 max-w-2xl">
              Engineering articles on power reliability, maintenance planning, and infrastructure design.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}

export function InsightDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="font-heading text-2xl font-bold text-graphite mb-4">Article Not Found</h1>
          <Link to="/insights" className="text-steel-dark hover:underline">View all insights</Link>
        </div>
      </Section>
    );
  }

  const relatedService = services.find(s => s.id === article.relatedServiceId);
  const otherArticles = articles.filter(a => a.id !== article.id);

  return (
    <>
      <ReadingProgress />
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={article.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-graphite/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: article.title }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-4 text-ivory/60 text-sm mb-4">
              <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight">
              {article.title}
            </h1>
            <p className="text-ivory/60 text-sm mt-4">By {article.author}</p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] rounded-sm overflow-hidden mb-10">
            <img src={article.image} alt={article.imageAlt} className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="prose-custom space-y-6">
            {article.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-structural leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {relatedService && (
            <div className="mt-12 p-6 bg-ivory-dark/50 border border-ivory-dark rounded-sm">
              <h3 className="font-heading font-semibold text-graphite mb-2">Related Service</h3>
              <p className="text-structural text-sm mb-3">{relatedService.description}</p>
              <Link to={`/services/${relatedService.slug}`} className="inline-flex items-center gap-1 text-steel-dark text-sm font-medium hover:gap-2 transition-all">
                Learn about {relatedService.shortTitle} <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </Section>

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <Section className="bg-white">
          <SectionHeading eyebrow="More Insights" title="Continue Reading" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {otherArticles.map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Need Engineering Advice?"
        description="Our team can help with power reliability, maintenance planning, and infrastructure design challenges."
        primaryText="Contact Our Team"
        primaryTo="/contact"
      />
    </>
  );
}
