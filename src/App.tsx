import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Gavel,
  FileText,
  Users,
  Building,
  MessageSquare,
  ShieldCheck,
  GraduationCap,
  Award,
  DoorOpen,
  Coins,
  ShieldAlert,
  Wrench,
  Ban,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/logo.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md text-slate-900 sticky top-0 z-50 shadow-sm border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer py-2"
              onClick={() => navigate('home')}
            >
              <img src={logo} alt="Patel Legal Services Logo" className="h-24 w-auto object-contain" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-900 ${
                    currentPage === page ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'services', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={`block w-full text-left px-3 py-4 text-base font-medium uppercase tracking-wider ${
                    currentPage === page ? 'text-slate-900 bg-slate-50 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main key={currentPage} className="flex-grow animate-in">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-4 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <img src={logo} alt="Patel Legal Services Logo" className="h-24 w-auto bg-white rounded p-2 mr-2 object-contain" />
              </div>
              <p className="text-sm mb-4">
                Legal Services providing affordable and effective legal representation for Landlord and Tenant Board and Small Claims Court matters in Ontario.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => navigate('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigate('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => navigate('services')} className="hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                  <span><a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a></span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                  <span><a href="mailto:info@patellegalservices.ca" className="hover:text-white transition-colors">info@patellegalservices.ca</a></span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>123 Legal Ave, Suite 400<br/>Toronto, ON M5V 2T6</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-xs text-center text-slate-500">
            <p className="mb-2">© {new Date().getFullYear()} Patel Legal Services. All rights reserved.</p>
            <p>
              <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. 
              Visiting this website or contacting Patel Legal Services does not create a paralegal-client relationship. 
              Please consult with a licensed legal professional for advice specific to your situation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Trusted Paralegal Services in Ontario
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 font-light">
              Helping individuals and businesses across Ontario navigate legal challenges with clarity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('contact')}
                className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-3.5 rounded-lg font-medium text-lg transition-colors flex items-center justify-center shadow-sm"
              >
                Book a Free Consultation
              </button>
              <button 
                onClick={() => navigate('services')}
                className="bg-slate-900 border-2 border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted Paralegal Services</h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-8"></div>
            <p className="text-lg text-slate-500 leading-relaxed">
              At Patel Legal Services, we provide expert legal services with professionalism, integrity, and client-first approach. We understand that legal matters can be complex and stressful, which is why we focus on delivering clean guidance, strategic advice, and strong representation at every stage of the legal process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all text-center">
              <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client-Focused</h3>
              <p className="text-slate-500">
                We provide clear guidance and practical solutions tailored towards your needs.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all text-center">
              <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Communication</h3>
              <p className="text-slate-500">
                Prompt communication and personalized attention for each client.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all text-center">
              <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ethical & Professional</h3>
              <p className="text-slate-500">
                Ensure your trust is well-placed and your rights are fully protected.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Summary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                  alt="Property" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white flex items-center">
                  <Building className="mr-3 h-6 w-6 text-slate-900" />
                  Landlord & Tenant Board
                </h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-500 mb-6 flex-grow">
                  The Residential Tenancies Act is complex. Our firm provides knowledgeable legal guidance and representation to both landlords and tenants in all matters before the Landlord and Tenant Board.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Eviction Applications</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Rent Arrears & Non-Payment Disputes</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Tenant Rights Violations</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Maintenance and Repair Disputes</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Wrongful Evictions</li>
                </ul>
                <button 
                  onClick={() => {
                    navigate('services');
                    setTimeout(() => {
                      const event = new CustomEvent('open-service', { detail: 'ltb' });
                      window.dispatchEvent(event);
                    }, 100);
                  }}
                  className="w-full py-3 border border-slate-200 rounded-md text-slate-900 font-medium group-hover:bg-slate-900 group-hover:text-white hover:!bg-slate-800 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
                  alt="Contract" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-slate-900" />
                  Small Claims Court Matters
                </h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-500 mb-6 flex-grow">
                  Our firm provides legal guidance and representation for matters before the Small Claims Court for claims up to $50,000. Whether you are starting a claim or defending one, we work closely with you to develop a strategy that protects your interests and pursue the best possible outcome.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Breach of Contract</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Debt Recovery</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Property Damage</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Personal Property</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Consumer Disputes</li>
                </ul>
                <button 
                  onClick={() => {
                    navigate('services');
                    setTimeout(() => {
                      const event = new CustomEvent('open-service', { detail: 'small-claims' });
                      window.dispatchEvent(event);
                    }, 100);
                  }}
                  className="w-full py-3 border border-slate-200 rounded-md text-slate-900 font-medium group-hover:bg-slate-900 group-hover:text-white hover:!bg-slate-800 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800" 
                  alt="Notary" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white flex items-center">
                  <ShieldCheck className="mr-3 h-6 w-6 text-slate-900" />
                  Notary Services
                </h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-500 mb-6 flex-grow">
                  Our firm provides reliable and efficient notary services to individuals and businesses. As a Notary Public, we are authorized to verify identities, witness signatures, and certify documents to ensure they are legally recognized.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Affidavits and Statutory Declarations</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Certify True Copies of Documents</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Consent Letters</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Power of Attorney</li>
                  <li className="flex items-center text-sm text-slate-900"><CheckCircle2 className="h-4 w-4 text-slate-900 mr-2" /> Real Estate and Financial Documents</li>
                </ul>
                <button 
                  onClick={() => {
                    navigate('services');
                    setTimeout(() => {
                      const event = new CustomEvent('open-service', { detail: 'notary' });
                      window.dispatchEvent(event);
                    }, 100);
                  }}
                  className="w-full py-3 border border-slate-200 rounded-md text-slate-900 font-medium group-hover:bg-slate-900 group-hover:text-white hover:!bg-slate-800 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to resolve your legal issue?</h2>
          <p className="text-xl text-white mb-10">
            Contact us today to schedule a consultation and discuss how we can help protect your interests.
          </p>
          <button 
            onClick={() => navigate('contact')}
            className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="animate-in">
      {/* Page Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <div className="w-24 h-1 bg-slate-900"></div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-slate-900 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Sagar Patel" 
                  className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Sagar Patel</h2>
              <p className="text-slate-900 font-semibold text-lg mb-6 uppercase tracking-wide">Licensed Paralegal</p>
              
              <div className="space-y-6 text-slate-500 text-lg">
                <p>
                  Sagar Patel is a licensed paralegal in good standing with the Law Society of Ontario. Sagar is dedicated to providing accessible, effective, and professional legal services. Sagar is committed to helping clients navigate legal challenges with clarity, confidence, and strong advocacy.
                </p>
                <p>
                  Sagar focuses on delivering practical legal solutions while maintaining a client-centered approach. Whether assisting with legal disputes, regulatory matters, or tribunal proceedings, Sagar works closely with clients to ensure they understand their rights, options, and the steps involved in their case.
                </p>
                <p>
                  Prior to becoming licensed, Sagar completed formal paralegal training and developed a strong foundation in legal research, advocacy, and case preparation. Through academic training and practical experience, Sagar has gained valuable insight into Ontario’s legal system and administrative tribunals.
                </p>
                <p>
                  Known for being detail-oriented, approachable, and responsive, Sagar strives to make the legal process more understandable and less intimidating for clients. Every matter is handled with professionalism, diligence, and respect.
                </p>
              </div>

              <div className="mt-12 border-t border-slate-200 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                  <div className="space-y-10">
                    <div className="flex items-start">
                      <div className="bg-slate-100 p-3 rounded-full mr-5 flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-4">Education</h4>
                        <div className="space-y-5">
                          <div>
                            <p className="font-semibold text-slate-900 text-lg">University of Toronto Mississauga</p>
                            <p className="text-slate-600">Honours in Bachelor of Arts</p>
                            <p className="text-sm text-slate-500">Double Major in Criminology, Law and Sociology</p>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 text-lg">Durham College</p>
                            <p className="text-slate-600">Paralegal Graduate Diploma with Honours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-slate-100 p-3 rounded-full mr-5 flex-shrink-0">
                        <Award className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-3">Licenses</h4>
                        <p className="font-semibold text-slate-900 text-lg">Law Society of Ontario</p>
                        <p className="text-slate-600">P1 License</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ navigate }: { navigate: (page: string) => void }) {
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenService = (e: CustomEvent) => {
      setActiveService(e.detail);
    };

    window.addEventListener('open-service', handleOpenService as EventListener);
    return () => {
      window.removeEventListener('open-service', handleOpenService as EventListener);
    };
  }, []);

  const services = [
    {
      id: 'ltb',
      title: 'Landlord and Tenant Board',
      icon: <Building className="h-12 w-12" />,
      description: 'Expert guidance for both landlords and tenants in all matters before the Landlord and Tenant Board.',
    },
    {
      id: 'small-claims',
      title: 'Small Claims Court Matters',
      icon: <FileText className="h-12 w-12" />,
      description: 'Legal representation for claims up to $50,000, including contract disputes and debt recovery.',
    },
    {
      id: 'notary',
      title: 'Notary Services',
      icon: <ShieldCheck className="h-12 w-12" />,
      description: 'Reliable notary services including affidavits, certified copies, and document authentication.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <AnimatePresence mode="wait">
        {!activeService ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Page Header */}
            <div className="bg-[#0f172a] py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Our Legal Services</h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Professional, affordable, and effective legal representation tailored to your specific needs in Ontario.
                </p>
              </div>
            </div>

            {/* Service Cards Grid */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-10">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -5 }}
                      className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="text-slate-900 mb-8">{service.icon}</div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h2>
                      <p className="text-slate-500 mb-10 flex-grow leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <button
                        onClick={() => setActiveService(service.id)}
                        className="w-full bg-[#0f172a] text-white py-4 rounded-xl font-bold transition-all hover:bg-slate-800 flex items-center justify-center"
                      >
                        View Full Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Patel Legal Services</h2>
                  <div className="w-24 h-1 bg-white/20 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                  <div className="text-center">
                    <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3">Licensed</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Regulated by the Law Society of Ontario.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3">Affordable</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Cost-effective alternative to traditional lawyers.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3">Responsive</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Clear and consistent communication at every step.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3">Meticulous</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Thorough evidence review and precise drafting.</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                      <Gavel className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3">Advocacy</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Strong representation before boards and courts.</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pb-20"
          >
            {/* Detail Header */}
            <div className="bg-white border-b border-slate-200 sticky top-28 z-40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center relative">
                <button
                  onClick={() => setActiveService(null)}
                  className="flex items-center text-slate-500 hover:text-slate-900 font-medium transition-colors group z-10"
                >
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">Back to Services</span>
                  <span className="sm:hidden">Back</span>
                </button>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
              {activeService === 'ltb' && (
                <div className="space-y-16">
                  <header>
                    <div className="inline-flex p-4 bg-slate-100 rounded-2xl mb-6">
                      <Building className="h-10 w-10 text-slate-900" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Landlord and Tenant Board</h1>
                  </header>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                        <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                        Services for Landlords
                      </h2>
                      <p className="text-slate-600 text-base leading-relaxed">We provide legal guidance and representation to landlords in various matters, including:</p>
                      <ul className="space-y-4">
                        {[
                          'Preparing and serving eviction notices',
                          'Applications for non-payment of rent',
                          'Representation at LTB hearings',
                          'Lease agreement review and drafting',
                          'Resolving property damage disputes',
                          'Rent increase compliance',
                          'Enforcement of LTB orders'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start group">
                            <CheckCircle2 className="h-6 w-6 text-slate-900 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-8">
                      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                        <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                        Services for Tenants
                      </h2>
                      <p className="text-slate-600 text-base leading-relaxed">Tenants have important legal protections. We provide legal support for tenants facing issues such as:</p>
                      <ul className="space-y-4">
                        {[
                          'Wrongful eviction defense',
                          'Maintenance and repair disputes',
                          'Illegal rent increase challenges',
                          'Harassment & interference claims',
                          'Representation at LTB hearings',
                          'Negotiating settlements'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start group">
                            <CheckCircle2 className="h-6 w-6 text-slate-900 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                      <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                      Representation at Hearings
                    </h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      Our firm can represent clients during hearings before the <span className="font-bold text-slate-900">Landlord and Tenant Board</span>, ensuring your case is presented professionally and effectively.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        'Preparing legal documents',
                        'Gathering evidence',
                        'Presenting arguments',
                        'Negotiating settlements'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-slate-900 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16">
                    <h2 className="text-3xl font-bold mb-6">Get Legal Guidance</h2>
                    <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-3xl">
                      Landlord-tenant disputes can have serious financial and housing consequences. Our firm is committed to providing clear advice, strong advocacy, and practical solutions to help resolve your matter effectively.
                    </p>
                    <button
                      onClick={() => navigate('contact')}
                      className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                    >
                      Schedule a Consultation
                    </button>
                  </section>
                </div>
              )}

              {activeService === 'small-claims' && (
                <div className="space-y-16">
                  <header>
                    <div className="inline-flex p-4 bg-slate-100 rounded-2xl mb-6">
                      <FileText className="h-10 w-10 text-slate-900" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Small Claims Court Matters</h1>
                  </header>

                  <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                          <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                          Starting a Claim
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed">If you are seeking compensation or damages, we can assist with:</p>
                        <ul className="space-y-3">
                          {[
                            'Assessing the strength of your case',
                            'Preparing and filing a Plaintiff’s Claim',
                            'Gathering evidence and supporting documentation',
                            'Serving court documents on the opposing party',
                            'Representing you throughout the court process'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-700">
                              <CheckCircle2 className="h-5 w-5 text-slate-900 mr-3" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                          <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                          Defending a Claim
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed">If a claim has been brought against you, we can help you:</p>
                        <ul className="space-y-3">
                          {[
                            'Understand your legal options',
                            'Prepare and file a Defence',
                            'Build a strong legal response',
                            'Negotiate settlements where appropriate',
                            'Represent you in court proceedings'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-700">
                              <CheckCircle2 className="h-5 w-5 text-slate-900 mr-3" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <section className="py-8">
                      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                        Representation at Court
                      </h2>
                      <p className="text-slate-600 mb-8 leading-relaxed">
                        Our firm can represent clients throughout the Ontario Small Claims Court process, including:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                        {[
                          'Settlement conferences',
                          'Motions and procedural matters',
                          'Trial preparation',
                          'Trial representation',
                          'Enforcement of court judgments'
                        ].map((item, i) => (
                          <div key={i} className="flex items-center text-slate-700">
                            <CheckCircle2 className="h-5 w-5 text-slate-900 mr-3 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <section className="bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16">
                    <h2 className="text-3xl font-bold mb-6">Practical Legal Solutions</h2>
                    <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-3xl">
                      Small Claims Court matters require clear strategy, careful preparation, and effective advocacy. Our goal is to help clients resolve disputes as efficiently as possible while protecting their legal and financial interests. Contact our firm today to schedule a consultation and discuss your case.
                    </p>
                    <button
                      onClick={() => navigate('contact')}
                      className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                    >
                      Schedule a Consultation
                    </button>
                  </section>
                </div>
              )}

              {activeService === 'notary' && (
                <div className="space-y-16">
                  <header>
                    <div className="inline-flex p-4 bg-slate-100 rounded-2xl mb-6">
                      <ShieldCheck className="h-10 w-10 text-slate-900" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Notary Services</h1>
                  </header>


                  <section id="doc-auth" className="bg-slate-50 p-10 rounded-3xl border border-slate-200 scroll-mt-48">
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                        Document Authentication
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        As a Notary Public, we can verify the authenticity of documents and confirm that copies match the original documents.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                        <div className="w-2 h-8 bg-slate-900 mr-4 rounded-full"></div>
                        What to Bring
                      </h2>
                      <div className="space-y-4 mb-10">
                        {[
                          { text: 'A valid government-issued photo ID', icon: Users },
                          { text: 'The original documents requiring notarization', icon: FileText },
                          { text: 'Any supporting documents, if applicable', icon: Building }
                        ].map((item, i) => (
                          <div key={i} className="flex items-start">
                            <item.icon className="h-6 w-6 text-slate-900 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-6 bg-amber-50 border-l-4 border-amber-400 text-amber-900 rounded-r-xl">
                        <p className="font-bold mb-1">Important Note:</p>
                        <p className="text-sm">Please do not sign the document in advance unless instructed to do so, as the signature may need to be witnessed.</p>
                      </div>
                    </div>
                  </section>

                  <section className="bg-slate-900 text-white p-12 rounded-[2.5rem] mt-16">
                    <h2 className="text-3xl font-bold mb-6">Convenient and Professional Service</h2>
                    <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-3xl">
                      We understand that notarizing documents is often time-sensitive. Our firm strives to provide efficient and professional notary services to meet your needs. Contact us today to schedule an appointment.
                    </p>
                    <button
                      onClick={() => navigate('contact')}
                      className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                    >
                      Schedule a Consultation
                    </button>
                  </section>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="animate-in">
      {/* Page Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-white/20"></div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Book Your Free Consultation Today</h2>
              <p className="text-slate-500 mb-10">
                Do not wait for your legal issues to escalate. Contact us today for a confidential assessment of your matter.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-500"><a href="tel:+15551234567" className="hover:text-slate-900 transition-colors">(555) 123-4567</a></p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-slate-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-500"><a href="mailto:info@patellegalservices.ca" className="hover:text-slate-900 transition-colors">info@patellegalservices.ca</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Office Location</h3>
                    <p className="text-slate-500">
                      123 Legal Ave, Suite 400<br />
                      Toronto, ON M5V 2T6
                    </p>
                    <p className="text-sm text-slate-500 mt-1">By appointment only.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-in">
                    <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h4>
                    <p className="text-slate-500 mb-6">Your message has been successfully sent. We will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-slate-900 mb-2">Description of Legal Issue</label>
                    <textarea 
                      id="issue" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all resize-none"
                      placeholder="Please briefly describe your situation (e.g., tenant not paying rent, contractor dispute)..."
                    ></textarea>
                  </div>
                  
                  <div className="text-sm text-slate-500">
                    <p>Please note: Submitting this form does not create a paralegal-client relationship. Please do not include confidential information in this form.</p>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
