import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import { ClipboardCheck, ShieldCheck, BarChart3, Lock, Zap, Search } from 'lucide-react';
import { Link } from '../components/Link';

const Home: React.FC = () => {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Audit Partner for Global-Focused Operations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Taggify is a registered Indian audit agency specializing in evaluating and improving operational compliance for businesses serving Global clients.
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how our audit services have helped businesses improve their operations and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="At LEO1 by Financepeer, we're transforming education finance through innovation and trust—empowering students and institutions with sustainable solutions to make quality education accessible to all. Our journey has just begun."
              author="Rohit Gajbhiye "
              position="Founder"
              company="LEO1 by Financepeer"
            />
            
            <TestimonialCard 
              quote="The audit team's deep understanding of KPO operations and US compliance requirements provided us with actionable insights that significantly improved our quality standards."
              author="Anuj Bajpai"
              position="COO"
              company="Hungama Digital Entertainment"
            />
            
            <TestimonialCard 
              quote="Their social media operations audit was eye-opening. They identified several compliance risks we weren't aware of and provided clear guidance on how to address them."
              author="Vikram Singh"
              position="Head of Digital"
              company="SocialEdge Management"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/clients" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              See More Client Testimonials
            </Link>
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
                
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
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
