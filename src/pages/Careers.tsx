import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeading, Breadcrumbs } from '../components/UI';

const openPositions = [
  { title: 'Senior Structural Engineer', department: 'Civil and Structural Engineering', location: 'Lagos', type: 'Full-time' },
  { title: 'MEP Coordinator', department: 'Mechanical and Electrical Engineering', location: 'Lagos', type: 'Full-time' },
  { title: 'Project Engineer', department: 'Project Delivery and Site Operations', location: 'Abuja', type: 'Full-time' },
  { title: 'Industrial Systems Engineer', department: 'Industrial Systems and Energy', location: 'Lagos', type: 'Full-time' },
  { title: 'Graduate Engineer', department: 'Engineering and Technical Services', location: 'Lagos', type: 'Full-time' },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', position: '', experience: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.message.trim()) newErrors.message = 'Please describe your experience';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    // No backend configured - show demo state
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31352672/pexels-photo-31352672/free-photo-of-industrial-factory-floor-with-machinery.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Industrial factory floor with machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-graphite/75" />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/80 via-graphite/60 to-graphite-light/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel mb-4 block">Careers</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ivory max-w-3xl">
              Build Your Engineering Career With Us
            </h1>
            <p className="text-ivory/70 text-lg mt-4 max-w-2xl">
              Join a multidisciplinary engineering team working on complex projects across West Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Open Positions" title="Current Opportunities" />
            <div className="space-y-4">
              {openPositions.map((pos, i) => (
                <motion.div
                  key={pos.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white border border-ivory-dark p-5 rounded-sm hover:border-steel transition-colors"
                >
                  <h3 className="font-heading font-semibold text-graphite text-lg">{pos.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-structural">
                    <span>{pos.department}</span>
                    <span>·</span>
                    <span>{pos.location}</span>
                    <span>·</span>
                    <span>{pos.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-heading text-xl font-bold text-graphite mb-4">Why VANTAGE Engineering?</h2>
              <ul className="space-y-3 text-structural">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 flex-shrink-0" /> Multidisciplinary projects across civil, MEP, industrial, and energy sectors</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 flex-shrink-0" /> Structured professional development and mentoring</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 flex-shrink-0" /> Exposure to complex engineering challenges</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 flex-shrink-0" /> Collaborative team environment with clear project governance</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 flex-shrink-0" /> Opportunity to work on landmark projects in Lagos, Abuja, and beyond</li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div>
            <div className="bg-white border border-ivory-dark p-6 md:p-8 rounded-sm sticky top-24">
              <h2 className="font-heading text-xl font-bold text-graphite mb-2">Express Interest</h2>
              <p className="text-structural text-sm mb-6">Submit your details and we'll be in touch about suitable opportunities.</p>

              {submitted ? (
                <div className="bg-steel/10 border border-steel/30 p-6 rounded-sm text-center">
                  <p className="font-heading font-semibold text-graphite mb-2">Thank You</p>
                  <p className="text-structural text-sm">Your expression of interest has been received. Our team will review your application and contact you within 2-3 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="career-name" className="block text-sm font-medium text-graphite mb-1">Full Name *</label>
                    <input id="career-name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="career-email" className="block text-sm font-medium text-graphite mb-1">Email *</label>
                    <input id="career-email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="career-phone" className="block text-sm font-medium text-graphite mb-1">Phone</label>
                    <input id="career-phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" placeholder="+234..." />
                  </div>
                  <div>
                    <label htmlFor="career-position" className="block text-sm font-medium text-graphite mb-1">Position of Interest *</label>
                    <select id="career-position" value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none">
                      <option value="">Select a position</option>
                      {openPositions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                    </select>
                    {errors.position && <p className="text-red-600 text-xs mt-1">{errors.position}</p>}
                  </div>
                  <div>
                    <label htmlFor="career-experience" className="block text-sm font-medium text-graphite mb-1">Relevant Experience</label>
                    <input id="career-experience" type="text" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" placeholder="Years of experience, key skills..." />
                  </div>
                  <div>
                    <label htmlFor="career-message" className="block text-sm font-medium text-graphite mb-1">Why VANTAGE? *</label>
                    <textarea id="career-message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none resize-none" />
                    {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full bg-graphite text-ivory px-6 py-3 font-semibold rounded-sm hover:bg-graphite-light transition-colors">
                    Submit Application
                  </button>
                  <p className="text-xs text-structural">By submitting, you consent to our processing of your data for recruitment purposes. See our <a href="/privacy" className="text-steel-dark underline">Privacy Policy</a>.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
