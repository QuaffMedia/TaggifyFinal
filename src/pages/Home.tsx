import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import { ClipboardCheck, ShieldCheck, BarChart3, Lock, Zap, Search } from 'lucide-react';
import { Link } from '../components/Link';

const Home: React.FC = () => {
   const testimonials = [
    {
      quote: "Taggify helped us build instant credibility, ensuring transparency and trust—essential pillars for scaling our impact with confidence and integrity.",
      author: "Rohit Gajbhiye",
      position: "Founder",
      company: "LEO1 by Financepeer",
      linkedin: "https://in.linkedin.com/in/rohitgajbhiye03"
    },
    {
      quote: "The audit team's deep understanding of KPO operations and US compliance requirements provided us with actionable insights that significantly improved our quality standards.",
      author: "Anuj Bajpai",
      position: "CEO",
      company: "Hungama Digital Entertainment",
      linkedin: "https://in.linkedin.com/in/anuj-bajpai"
    },
    
    {
      quote: "Taggify’s auditors brought clarity and precision, helping us identify blind spots and implement changes that transformed how we maintain excellence and compliance."
,
      author: "Ojasvi Babber",
      position: "CEO",
      company: " Amity Venture Funds",
      linkedin: "https://in.linkedin.com/in/ojasvi"
    },
    
    
  ];
  return (
    <div>
      <Hero 
        title="Leading Audit Services for Global Client-Facing Operations"
        subtitle="Led by ex-Big Four professionals, we provide compliance-driven audit solutions for BPOs, KPOs, and social media agencies—building trust between Indian teams and Global clients."
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Audit Partner for global-Focused Operations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Taggify is a registered Indian audit agency specializing in evaluating and improving operational compliance for businesses serving global clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Audit team at work" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Your Compliance Guarantee</h3>
              <p className="text-gray-600 mb-6">
                Backed by a team of credible and experienced auditors specializing in global business operations, we offer end-to-end audit solutions to help your business maintain the highest standards of compliance, security, and operational efficiency.
              </p>
              
              <p className="font-semibold mb-2">Our core services include:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>On-Site Audits</strong> – Hands-on assessments to ensure operational
                  integrity and adherence to standards.
                </li>
                <li>
                  <strong>Financial Audits</strong> – Detailed reviews to verify accuracy,
                  transparency, and fiscal responsibility.
                </li>
                <li>
                  <strong>Compliance Audits</strong> – Comprehensive checks to ensure regulatory and
                  policy alignment across jurisdictions.
                </li>
              </ul>
              
              {/* <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <ClipboardCheck className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Legally Registered Business</h4>
                    <p className="text-gray-600">CIN: U62099HR2024PTC118110</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <ShieldCheck className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Tax Compliant Operations</h4>
                    <p className="text-gray-600">PAN: AAKCT7010Q | TAN: RTKT09071G</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <BarChart3 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Industry Expertise</h4>
                    <p className="text-gray-600">Specialized in BPO, KPO and Social Media operations</p>
                  </div>
                </div>
              </div>
               */}
              <div className="mt-8">
                <Link to="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Audit Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide specialized audit and compliance services for operations that serve Global clients, ensuring your business maintains the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<ClipboardCheck size={32} />}
              title="BPO Operations Audit"
              description="Comprehensive evaluation of voice and non-voice BPO operations, focusing on service quality, compliance, and operational efficiency."
              link="/services/bpo"
            />
            
            <ServiceCard 
              icon={<Search size={32} />}
              title="KPO Compliance Verification"
              description="Detailed assessment of knowledge process operations, ensuring adherence to data handling protocols and industry-specific regulations."
              link="/services/kpo"
            />
            
            <ServiceCard 
              icon={<BarChart3 size={32} />}
              title="Social Media Operations Audit"
              description="Evaluation of social media management operations, focusing on content compliance, account security, and adherence to platform policies."
              link="/services/social-media"
            />
            
            <ServiceCard 
              icon={<Lock size={32} />}
              title="Data Security Compliance"
              description="Thorough assessment of data security measures, privacy controls, and compliance with international data protection regulations."
              link="/services/data-security"
            />
            
            <ServiceCard 
              icon={<Zap size={32} />}
              title="Process Efficiency Evaluation"
              description="Analysis of operational workflows to identify bottlenecks, inefficiencies, and opportunities for optimization."
              link="/services/process"
            />
            
            <ServiceCard 
              icon={<ShieldCheck size={32} />}
              title="Risk Management Consulting"
              description="Expert guidance on identifying, assessing, and mitigating operational risks in outsourced business processes."
              link="/services/risk"
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Audit Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured, transparent approach to ensure comprehensive audits that provide actionable insights.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ProcessStep 
              number={1}
              title="Initial Consultation"
              description="We begin by understanding your operations, requirements, and specific compliance needs."
            />
            
            <ProcessStep 
              number={2}
              title="Scope Definition"
              description="We define the scope of the audit, outlining areas to be evaluated and establishing clear objectives."
            />
            
            <ProcessStep 
              number={3}
              title="Audit Execution"
              description="Our team conducts a thorough on-site evaluation, examining processes, documentation, and compliance measures."
            />
            
            <ProcessStep 
              number={4}
              title="Findings Documentation"
              description="We document our observations, compliance issues, and areas for improvement in a comprehensive report."
            />
            
            <ProcessStep 
              number={5}
              title="Recommendations"
              description="Based on our findings, we provide detailed recommendations to address issues and enhance compliance."
            />
            
            <ProcessStep 
              number={6}
              title="Follow-up Support"
              description="We offer ongoing support to help implement recommended changes and ensure sustained compliance."
              isLast={true}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/process" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have partnered with us to enhance their operations and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="flex-grow mb-4">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4 min-w-0">
                    <div className="flex items-center">
                      <h4 className="font-semibold truncate">{testimonial.author}</h4>
                      <a 
                        href={testimonial.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 flex-shrink-0 text-blue-600 hover:text-blue-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm truncate">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ready to ensure your operations meet the highest standards? Get in touch with our team to discuss your audit needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-gray-100 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                <p className="text-gray-600 mb-6">
                  65, Sector-12, HUDA, Panipat, Haryana - 132103, India
                </p>
                
                <div className="rounded-lg overflow-hidden shadow-md mb-6">
                  {/* Google Maps iframe commented out */}
                </div>
                
                <h3 className="text-xl font-bold mb-4">Business Hours (IST)</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-2">Phone: +918005540849</p>
                <p className="text-gray-600 mb-2">Email: audit@taggify.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
