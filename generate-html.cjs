const fs = require('fs');
const path = require('path');

const tailwindCdn = '<script src="https://cdn.tailwindcss.com"></script>';
const fontAwesome = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />';

const header = (activePage) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patel Legal Services - Trusted Paralegal in Ontario</title>
    ${tailwindCdn}
    ${fontAwesome}
    <style>
        html { scroll-behavior: smooth; }
        .mobile-menu-open #mobile-menu { display: block; }
        #mobile-menu { display: none; }
    </style>
</head>
<body class="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
    <!-- Header -->
    <header class="bg-white/95 backdrop-blur-md text-slate-900 sticky top-0 z-50 shadow-sm border-b border-slate-200 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-28">
                <!-- Logo -->
                <a href="index.html" class="flex items-center py-2">
                    <img src="./assets/logo.png" alt="Patel Legal Services Logo" class="h-24 w-auto object-contain" onerror="this.src='https://via.placeholder.com/150x50?text=Patel+Legal+Services'" />
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-900 ${activePage === 'home' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'}">Home</a>
                    <a href="about.html" class="text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-900 ${activePage === 'about' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'}">About</a>
                    <a href="services.html" class="text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-900 ${activePage === 'services' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'}">Services</a>
                    <a href="contact.html" class="text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-900 ${activePage === 'contact' ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'}">Contact</a>
                </nav>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button onclick="document.body.classList.toggle('mobile-menu-open')" class="text-slate-500 hover:text-slate-900">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Nav -->
        <div id="mobile-menu" class="md:hidden bg-white border-t border-slate-200 shadow-lg absolute w-full left-0">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="index.html" class="block w-full text-left px-3 py-4 text-base font-medium uppercase tracking-wider ${activePage === 'home' ? 'text-slate-900 bg-slate-50 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}">Home</a>
                <a href="about.html" class="block w-full text-left px-3 py-4 text-base font-medium uppercase tracking-wider ${activePage === 'about' ? 'text-slate-900 bg-slate-50 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}">About</a>
                <a href="services.html" class="block w-full text-left px-3 py-4 text-base font-medium uppercase tracking-wider ${activePage === 'services' ? 'text-slate-900 bg-slate-50 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}">Services</a>
                <a href="contact.html" class="block w-full text-left px-3 py-4 text-base font-medium uppercase tracking-wider ${activePage === 'contact' ? 'text-slate-900 bg-slate-50 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}">Contact</a>
            </div>
        </div>
    </header>
    <main class="flex-grow">
`;

const footer = `
    </main>
    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12 border-t-4 border-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <div class="flex items-center mb-6">
                        <img src="./assets/logo.png" alt="Patel Legal Services Logo" class="h-24 w-auto bg-white rounded p-2 mr-2 object-contain" onerror="this.src='https://via.placeholder.com/150x50?text=Patel+Legal+Services'" />
                    </div>
                    <p class="text-sm mb-4">
                        Legal Services providing affordable and effective legal representation for Landlord and Tenant Board and Small Claims Court matters in Ontario.
                    </p>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul class="space-y-2 text-sm text-slate-300">
                        <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                        <li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="services.html" class="hover:text-white transition-colors">Our Services</a></li>
                        <li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-4">Contact Info</h3>
                    <ul class="space-y-3 text-sm text-slate-300">
                        <li class="flex items-center">
                            <i class="fa-solid fa-phone text-slate-400 mr-3 flex-shrink-0"></i>
                            <span><a href="tel:+15551234567" class="hover:text-white transition-colors">(555) 123-4567</a></span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-solid fa-envelope text-slate-400 mr-3 flex-shrink-0"></i>
                            <span><a href="mailto:info@patellegalservices.ca" class="hover:text-white transition-colors">info@patellegalservices.ca</a></span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa-solid fa-location-dot text-slate-400 mr-3 flex-shrink-0 mt-1"></i>
                            <span>123 Legal Ave, Suite 400<br/>Toronto, ON M5V 2T6</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-8 text-xs text-center text-slate-500">
                <p class="mb-2">© 2026 Patel Legal Services. All rights reserved.</p>
                <p>
                    <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. 
                    Visiting this website or contacting Patel Legal Services does not create a paralegal-client relationship. 
                    Please consult with a licensed legal professional for advice specific to your situation.
                </p>
            </div>
        </div>
    </footer>
</body>
</html>
`;

const homeContent = `
    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div class="max-w-3xl">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                    Trusted Paralegal Services in Ontario
                </h1>
                <p class="text-xl md:text-2xl text-white mb-10 font-light">
                    Helping individuals and businesses across Ontario navigate legal challenges with clarity and confidence.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="contact.html" class="bg-white hover:bg-slate-50 text-slate-900 px-8 py-3.5 rounded-lg font-medium text-lg transition-colors flex items-center justify-center shadow-sm">
                        Book a Free Consultation
                    </a>
                    <a href="services.html" class="bg-slate-900 border-2 border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center">
                        Explore Our Services
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Intro Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl font-bold text-slate-900 mb-6">Trusted Paralegal Services</h2>
                <div class="w-24 h-1 bg-slate-900 mx-auto mb-8"></div>
                <p class="text-lg text-slate-500 leading-relaxed">
                    At Patel Legal Services, we provide expert legal services with professionalism, integrity, and client-first approach. We understand that legal matters can be complex and stressful, which is why we focus on delivering clean guidance, strategic advice, and strong representation at every stage of the legal process.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all text-center">
                    <div class="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-users text-3xl text-slate-900"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Client-Focused</h3>
                    <p class="text-slate-500">We provide clear guidance and practical solutions tailored towards your needs.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all text-center">
                    <div class="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-message text-3xl text-slate-900"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Transparent Communication</h3>
                    <p class="text-slate-500">Prompt communication and personalized attention for each client.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all text-center">
                    <div class="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-shield-halved text-3xl text-slate-900"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3">Ethical & Professional</h3>
                    <p class="text-slate-500">Ensure your trust is well-placed and your rights are fully protected.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Summary -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Our Practice Areas</h2>
                <div class="w-24 h-1 bg-slate-900 mx-auto"></div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div class="h-48 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Property" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white flex items-center">
                            <i class="fa-solid fa-building mr-3 text-xl"></i> Landlord & Tenant Board
                        </h3>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-slate-500 mb-6 flex-grow">The Residential Tenancies Act is complex. Our firm provides knowledgeable legal guidance and representation to both landlords and tenants in all matters before the Landlord and Tenant Board.</p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Eviction Applications</li>
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Rent Arrears & Non-Payment Disputes</li>
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Tenant Rights Violations</li>
                        </ul>
                        <a href="services.html#ltb" class="block text-center w-full py-3 border border-slate-200 rounded-md text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-colors">Learn More</a>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div class="h-48 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" alt="Contract" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white flex items-center">
                            <i class="fa-solid fa-file-lines mr-3 text-xl"></i> Small Claims Court
                        </h3>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-slate-500 mb-6 flex-grow">Our firm provides legal guidance and representation for matters before the Small Claims Court for claims up to $50,000.</p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Breach of Contract</li>
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Debt Recovery</li>
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Property Damage</li>
                        </ul>
                        <a href="services.html#small-claims" class="block text-center w-full py-3 border border-slate-200 rounded-md text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-colors">Learn More</a>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div class="h-48 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800" alt="Notary" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white flex items-center">
                            <i class="fa-solid fa-shield-halved mr-3 text-xl"></i> Notary Services
                        </h3>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-slate-500 mb-6 flex-grow">Our firm provides reliable and efficient notary services to individuals and businesses.</p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Affidavits & Declarations</li>
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Certify True Copies</li>
                            <li class="flex items-center text-sm text-slate-900"><i class="fa-solid fa-circle-check text-slate-900 mr-2"></i> Consent Letters</li>
                        </ul>
                        <a href="services.html#notary" class="block text-center w-full py-3 border border-slate-200 rounded-md text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-colors">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-900 text-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to resolve your legal issue?</h2>
            <p class="text-xl text-white mb-10">Contact us today to schedule a consultation and discuss how we can help protect your interests.</p>
            <a href="contact.html" class="inline-block bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg">Contact Us Today</a>
        </div>
    </section>
`;

const aboutContent = `
    <!-- Page Header -->
    <div class="bg-slate-900 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold text-white mb-4">About Us</h1>
            <div class="w-24 h-1 bg-slate-900"></div>
        </div>
    </div>

    <!-- Content -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row gap-16 items-center">
                <div class="md:w-1/2">
                    <div class="relative">
                        <div class="absolute inset-0 bg-slate-900 rounded-lg transform translate-x-4 translate-y-4"></div>
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Sagar Patel" class="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5]" />
                    </div>
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold text-slate-900 mb-2">Sagar Patel</h2>
                    <p class="text-slate-900 font-semibold text-lg mb-6 uppercase tracking-wide">Licensed Paralegal</p>
                    
                    <div class="space-y-6 text-slate-500 text-lg">
                        <p>Sagar Patel is a licensed paralegal in good standing with the Law Society of Ontario. Sagar is dedicated to providing accessible, effective, and professional legal services. Sagar is committed to helping clients navigate legal challenges with clarity, confidence, and strong advocacy.</p>
                        <p>Sagar focuses on delivering practical legal solutions while maintaining a client-centered approach. Whether assisting with legal disputes, regulatory matters, or tribunal proceedings, Sagar works closely with clients to ensure they understand their rights, options, and the steps involved in their case.</p>
                        <p>Prior to becoming licensed, Sagar completed formal paralegal training and developed a strong foundation in legal research, advocacy, and case preparation. Through academic training and practical experience, Sagar has gained valuable insight into Ontario’s legal system and administrative tribunals.</p>
                        <p>Known for being detail-oriented, approachable, and responsive, Sagar strives to make the legal process more understandable and less intimidating for clients. Every matter is handled with professionalism, diligence, and respect.</p>
                    </div>

                    <div class="mt-12 border-t border-slate-200 pt-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                            <div class="space-y-10">
                                <div class="flex items-start">
                                    <div class="bg-slate-100 p-3 rounded-full mr-5 flex-shrink-0">
                                        <i class="fa-solid fa-graduation-cap text-xl text-slate-900"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-slate-900 text-xl mb-4">Education</h4>
                                        <div class="space-y-5">
                                            <div>
                                                <p class="font-semibold text-slate-900 text-lg">University of Toronto Mississauga</p>
                                                <p class="text-slate-600">Honours in Bachelor of Arts</p>
                                                <p class="text-sm text-slate-500">Double Major in Criminology, Law and Sociology</p>
                                            </div>
                                            <div>
                                                <p class="font-semibold text-slate-900 text-lg">Durham College</p>
                                                <p class="text-slate-600">Paralegal Graduate Diploma with Honours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="bg-slate-100 p-3 rounded-full mr-5 flex-shrink-0">
                                        <i class="fa-solid fa-award text-xl text-slate-900"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-slate-900 text-xl mb-3">Licenses</h4>
                                        <p class="font-semibold text-slate-900 text-lg">Law Society of Ontario</p>
                                        <p class="text-slate-600">P1 License</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const servicesContent = `
    <!-- Page Header -->
    <div class="bg-slate-900 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Legal Services</h1>
            <p class="text-xl text-white/70 max-w-2xl mx-auto">Professional, affordable, and effective legal representation tailored to your specific needs in Ontario.</p>
        </div>
    </div>

    <!-- Service Cards Grid -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                <div id="ltb" class="group bg-slate-50 p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:bg-white transition-all duration-300">
                    <div class="text-slate-900 mb-6"><i class="fa-solid fa-building text-5xl"></i></div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Landlord and Tenant Board</h2>
                    <p class="text-slate-600 mb-8 flex-grow leading-relaxed">Expert guidance for both landlords and tenants in all matters before the Landlord and Tenant Board.</p>
                </div>
                <div id="small-claims" class="group bg-slate-50 p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:bg-white transition-all duration-300">
                    <div class="text-slate-900 mb-6"><i class="fa-solid fa-file-lines text-5xl"></i></div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Small Claims Court Matters</h2>
                    <p class="text-slate-600 mb-8 flex-grow leading-relaxed">Legal representation for claims up to $50,000, including contract disputes and debt recovery.</p>
                </div>
                <div id="notary" class="group bg-slate-50 p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:bg-white transition-all duration-300">
                    <div class="text-slate-900 mb-6"><i class="fa-solid fa-shield-halved text-5xl"></i></div>
                    <h2 class="text-2xl font-bold text-slate-900 mb-4">Notary Services</h2>
                    <p class="text-slate-600 mb-8 flex-grow leading-relaxed">Reliable notary services including affidavits, certified copies, and document authentication.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-slate-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Patel Legal Services</h2>
                <div class="w-24 h-1 bg-white/20 mx-auto"></div>
            </div>
            
            <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div class="text-center">
                    <div class="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                        <i class="fa-solid fa-scale-balanced text-2xl text-white"></i>
                    </div>
                    <h3 class="font-bold mb-3">Licensed</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Regulated by the Law Society of Ontario.</p>
                </div>
                <div class="text-center">
                    <div class="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                        <i class="fa-solid fa-briefcase text-2xl text-white"></i>
                    </div>
                    <h3 class="font-bold mb-3">Affordable</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Cost-effective alternative to traditional lawyers.</p>
                </div>
                <div class="text-center">
                    <div class="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                        <i class="fa-solid fa-envelope text-2xl text-white"></i>
                    </div>
                    <h3 class="font-bold mb-3">Responsive</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Clear and consistent communication at every step.</p>
                </div>
                <div class="text-center">
                    <div class="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                        <i class="fa-solid fa-shield-halved text-2xl text-white"></i>
                    </div>
                    <h3 class="font-bold mb-3">Ethical</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Strict adherence to professional rules of conduct.</p>
                </div>
                <div class="text-center">
                    <div class="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                        <i class="fa-solid fa-users text-2xl text-white"></i>
                    </div>
                    <h3 class="font-bold mb-3">Client-First</h3>
                    <p class="text-white/60 text-sm leading-relaxed">Your best interests are always our top priority.</p>
                </div>
            </div>
        </div>
    </section>
`;

const contactContent = `
    <!-- Page Header -->
    <div class="bg-slate-900 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <div class="w-24 h-1 bg-slate-900"></div>
        </div>
    </div>

    <!-- Content -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16">
                <!-- Contact Info -->
                <div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                    <p class="text-slate-500 text-lg mb-10">
                        We are here to help you navigate your legal matters. Contact us today to schedule a consultation.
                    </p>
                    
                    <div class="space-y-8">
                        <div class="flex items-start">
                            <div class="bg-slate-100 p-4 rounded-full mr-6">
                                <i class="fa-solid fa-phone text-xl text-slate-900"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-slate-900 text-lg mb-1">Phone</h3>
                                <p class="text-slate-600"><a href="tel:+15551234567" class="hover:text-slate-900 transition-colors">(555) 123-4567</a></p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-slate-100 p-4 rounded-full mr-6">
                                <i class="fa-solid fa-envelope text-xl text-slate-900"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-slate-900 text-lg mb-1">Email</h3>
                                <p class="text-slate-600"><a href="mailto:info@patellegalservices.ca" class="hover:text-slate-900 transition-colors">info@patellegalservices.ca</a></p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-slate-100 p-4 rounded-full mr-6">
                                <i class="fa-solid fa-location-dot text-xl text-slate-900"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-slate-900 text-lg mb-1">Office</h3>
                                <p class="text-slate-600">123 Legal Ave, Suite 400<br/>Toronto, ON M5V 2T6</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                    <form onsubmit="event.preventDefault(); alert('Thank you for your message. We will get back to you shortly.'); this.reset();" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                <input type="text" required class="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                <input type="text" required class="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all" />
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <input type="email" required class="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                            <input type="tel" class="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea rows="4" required class="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;

fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), header('home') + homeContent + footer);
fs.writeFileSync(path.join(__dirname, 'docs', 'about.html'), header('about') + aboutContent + footer);
fs.writeFileSync(path.join(__dirname, 'docs', 'services.html'), header('services') + servicesContent + footer);
fs.writeFileSync(path.join(__dirname, 'docs', 'contact.html'), header('contact') + contactContent + footer);

console.log('Static HTML files generated successfully in docs/');
