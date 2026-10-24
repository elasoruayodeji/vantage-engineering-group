import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { ServicesOverview, ServiceDetail } from './pages/Services';
import { ProjectsOverview, ProjectDetail } from './pages/Projects';
import Process from './pages/Process';
import { InsightsList, InsightDetail } from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { Privacy, Terms, NotFound } from './pages/Legal';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsOverview />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/insights" element={<InsightsList />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
