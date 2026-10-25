import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section, Breadcrumbs } from '../components/UI';
import SEO from '../components/SEO';

export function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Read VANTAGE Engineering Group's privacy policy. Learn how we collect, use, and protect your personal data."
        canonical="/privacy"
        noindex
      />
      <section className="py-16 md:py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-ivory mt-4">Privacy Policy</h1>
            <p className="text-ivory/60 text-sm mt-2">Last updated: October 2026. This is a demonstration policy for a fictional company.</p>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="max-w-3xl prose-custom space-y-6 text-structural leading-relaxed">
          <p><strong>Note:</strong> VANTAGE Engineering Group is a fictional company. This privacy policy is a template for demonstration purposes and does not represent an actual operational policy.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">1. Introduction</h2>
          <p>This privacy policy explains how VANTAGE Engineering Group Limited ("we", "us") collects, uses, and protects personal data submitted through this website.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">2. Data We Collect</h2>
          <p>We may collect: your name, company name, email address, telephone number, project location, and project details when you submit an enquiry form. We do not collect unnecessary personal data.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">3. How We Use Your Data</h2>
          <p>Data submitted through enquiry forms is used solely to respond to your project enquiry. We do not use enquiry data for marketing without separate consent.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">4. Data Retention</h2>
          <p>Enquiry data is retained for as long as necessary to respond to your enquiry and for reasonable follow-up, after which it is securely deleted.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">5. Data Sharing</h2>
          <p>We do not sell or share your personal data with third parties except where necessary to respond to your enquiry (e.g., sharing project details with specialist sub-consultants with your knowledge).</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">6. Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of your personal data. Contact us at enquiries@vantageengineering.example to exercise these rights.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">7. Cookies</h2>
          <p>This website uses minimal cookies necessary for site functionality. We do not use tracking cookies or advertising pixels.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">8. Contact</h2>
          <p>For privacy-related enquiries, contact: enquiries@vantageengineering.example</p>
        </div>
      </Section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Use"
        description="Read VANTAGE Engineering Group's terms of use. Understand the conditions for using our website and services."
        canonical="/terms"
        noindex
      />
      <section className="py-16 md:py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms of Use' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-ivory mt-4">Terms of Use</h1>
            <p className="text-ivory/60 text-sm mt-2">Last updated: October 2026. This is a demonstration policy for a fictional company.</p>
          </motion.div>
        </div>
      </section>
      <Section>
        <div className="max-w-3xl prose-custom space-y-6 text-structural leading-relaxed">
          <p><strong>Note:</strong> VANTAGE Engineering Group is a fictional company. These terms are a template for demonstration purposes.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">1. Website Content</h2>
          <p>The content on this website is provided for informational purposes. VANTAGE Engineering Group is a fictional company created for demonstration. All project details, team members, and outcomes are illustrative only.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">2. No Professional Advice</h2>
          <p>Nothing on this website constitutes professional engineering advice. Engineering decisions require site-specific assessment by qualified professionals.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">3. Intellectual Property</h2>
          <p>Website design, text content, and original graphics are owned by or licensed to VANTAGE Engineering Group. Stock photography is used under applicable licenses from respective sources.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">4. Limitation of Liability</h2>
          <p>This is a demonstration website. We make no warranties about the completeness or accuracy of content. Use of this website is at your own risk.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">5. External Links</h2>
          <p>This website may contain links to external sites. We are not responsible for the content of external websites.</p>
          
          <h2 className="font-heading text-xl font-bold text-graphite">6. Changes</h2>
          <p>We may update these terms from time to time. Continued use of the website constitutes acceptance of updated terms.</p>
        </div>
      </Section>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to VANTAGE Engineering Group's homepage to explore our engineering services."
        noindex
      />
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-heading text-8xl font-bold text-ivory-dark">404</span>
            <h1 className="font-heading text-2xl font-bold text-graphite mt-4 mb-3">Page Not Found</h1>
            <p className="text-structural mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="bg-graphite text-ivory px-6 py-3 font-semibold rounded-sm hover:bg-graphite-light transition-colors">
                Go Home
              </Link>
              <Link to="/services" className="text-steel-dark font-medium hover:underline">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
