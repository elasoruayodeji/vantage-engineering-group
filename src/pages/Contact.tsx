import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section, Breadcrumbs } from '../components/UI';
import { CONTACT, services } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '', company: '', email: '', phone: '', location: '',
    service: '', budget: '', description: '', contactMethod: 'email', consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.description.trim()) newErrors.description = 'Please describe your project';
    if (!formData.consent) newErrors.consent = 'Please accept the privacy notice';
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
    setSubmitting(true);
    // Simulate submission - no backend configured
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <>
      <section className="relative py-24 md:py-32 bg-graphite overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel mb-4 block">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ivory max-w-3xl">
              Discuss Your Project
            </h1>
            <p className="text-ivory/70 text-lg mt-4 max-w-2xl">
              Tell us about your engineering requirements. We'll review your brief and respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-steel-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-graphite text-sm">Office</h3>
                  <p className="text-structural text-sm mt-1">{CONTACT.address}</p>
                  <p className="text-structural text-sm">{CONTACT.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-steel-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-graphite text-sm">WhatsApp</h3>
                  <a 
                    href="https://wa.me/2348075690088" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-structural text-sm mt-1 hover:text-steel transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-steel-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-graphite text-sm">Email</h3>
                  <a 
                    href="mailto:elasoruayodeji@gmail.com"
                    className="text-structural text-sm mt-1 hover:text-steel transition-colors block"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-steel-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-graphite text-sm">Office Hours</h3>
                  <p className="text-structural text-sm mt-1">{CONTACT.hours}</p>
                </div>
              </div>
            </div>


          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-steel/10 border border-steel/30 p-8 rounded-sm text-center">
                <div className="w-16 h-16 bg-steel/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-steel-dark" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-graphite mb-3">Enquiry Received</h2>
                <p className="text-structural leading-relaxed max-w-md mx-auto">
                  Thank you for your interest. This is a demonstration form — no data has been transmitted. In a production environment, your enquiry would be reviewed by our team and you would receive a response within one business day.
                </p>
                <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', company: '', email: '', phone: '', location: '', service: '', budget: '', description: '', contactMethod: 'email', consent: false }); }} className="mt-6 text-steel-dark font-medium hover:underline">
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-graphite mb-1">Full Name *</label>
                    <input id="contact-name" type="text" value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" aria-invalid={!!errors.fullName} />
                    {errors.fullName && <p className="text-red-600 text-xs mt-1" role="alert">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-graphite mb-1">Company Name</label>
                    <input id="contact-company" type="text" value={formData.company} onChange={e => updateField('company', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-graphite mb-1">Business Email *</label>
                    <input id="contact-email" type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-red-600 text-xs mt-1" role="alert">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-graphite mb-1">Telephone (with country code)</label>
                    <input id="contact-phone" type="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" placeholder="+234..." />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-location" className="block text-sm font-medium text-graphite mb-1">Project Location</label>
                    <input id="contact-location" type="text" value={formData.location} onChange={e => updateField('location', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none" placeholder="City, State" />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-graphite mb-1">Service Required</label>
                    <select id="contact-service" value={formData.service} onChange={e => updateField('service', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none">
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                      <option value="multiple">Multiple / Not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-budget" className="block text-sm font-medium text-graphite mb-1">Approximate Project Budget (optional)</label>
                  <select id="contact-budget" value={formData.budget} onChange={e => updateField('budget', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none">
                    <option value="">Prefer not to say</option>
                    <option value="under-100m">Under ₦100 million</option>
                    <option value="100m-500m">₦100 million – ₦500 million</option>
                    <option value="500m-1b">₦500 million – ₦1 billion</option>
                    <option value="above-1b">Above ₦1 billion</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-description" className="block text-sm font-medium text-graphite mb-1">Project Description *</label>
                  <textarea id="contact-description" rows={5} value={formData.description} onChange={e => updateField('description', e.target.value)} className="w-full px-4 py-2.5 border border-ivory-dark rounded-sm text-sm focus:border-steel focus:outline-none resize-none" placeholder="Describe your project requirements, timeline, and any specific challenges..." aria-invalid={!!errors.description} />
                  {errors.description && <p className="text-red-600 text-xs mt-1" role="alert">{errors.description}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    {['email', 'phone', 'either'].map(method => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={e => updateField('contactMethod', e.target.value)} className="text-steel focus:ring-steel" />
                        <span className="text-sm text-structural capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.consent} onChange={e => updateField('consent', e.target.checked)} className="mt-1 text-steel focus:ring-steel" aria-invalid={!!errors.consent} />
                    <span className="text-sm text-structural">I consent to VANTAGE Engineering processing my data for the purpose of responding to this enquiry, in accordance with the <a href="/privacy" className="text-steel-dark underline">Privacy Policy</a>. *</span>
                  </label>
                  {errors.consent && <p className="text-red-600 text-xs mt-1" role="alert">{errors.consent}</p>}
                </div>
                <button type="submit" disabled={submitting} className="w-full bg-graphite text-ivory px-6 py-3.5 font-semibold rounded-sm hover:bg-graphite-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
