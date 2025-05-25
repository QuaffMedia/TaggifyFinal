import React from 'react';
import Hero from '../components/Hero';
import { ShieldCheck, Award, Users, GraduationCap, Lightbulb, Target } from 'lucide-react';
import { Link } from '../components/Link';

const About: React.FC = () => {
  return (
    <div>
      <Hero 
        title="About Taggify"
        subtitle="We are a specialized audit agency committed to ensuring compliance and operational excellence for businesses serving Global Clients."
        backgroundImage="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Mission and Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <p className="text-gray-600">
                  To provide thorough, unbiased audit services that help Indian operations serving Global Clients maintain the highest standards of compliance, security, and operational efficiency.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted audit partner for Global business operations, fostering transparency, security, and excellence in outsourced services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
                <p className="text-gray-600">
                  We commit to delivering comprehensive, unbiased, and actionable audit findings that help your business thrive in the competitive world of outsourced operations while maintaining full compliance with all relevant regulations.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Taggify is a legally registered business entity operating under Indian law, providing professional audit services with full compliance.
            </p>
          </div> 
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <ShieldCheck className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Legal Status</h3>
              <p className="text-gray-600 mb-4">
                Registered as a private limited company under the Companies Act, 2013.
              </p>
              <p className="font-medium">CIN: U62099HR2024PTC118110</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <Award className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Tax Compliance</h3>
              <p className="text-gray-600 mb-4">
                Fully compliant with Indian tax regulations and financial reporting requirements.
              </p>
              <p className="font-medium">GST: 06AAKCT7010Q1ZW</p>
              {/* <p className="font-medium">TAN: RTKT09071G</p> */}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <GraduationCap className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Serving 35+ Clients Worldwide</h3>
              <p className="text-gray-600 mb-4">
                 We are managing 15+ Public Sector and 20+ Private Sector Companies </p>
              {/* <p className="font-medium">ISO 9001:2015 Certified</p>
              <p className="font-medium">Member, Institute of Internal Auditors</p> */} 
            </div>
          </div> 
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our audit services, bringing decades of combined expertise in compliance and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Rahul Verma</h3>
              <p className="text-blue-600 mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                15+ years of experience in audit and compliance consulting for multinational operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/3760279/pexels-photo-3760279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sunita Patel</h3>
              <p className="text-blue-600 mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Former BPO operations director with extensive experience in process optimization and compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Avinash Kumar</h3>
              <p className="text-blue-600 mb-3">Chief Technical Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Data security expert specializing in compliance regulations for cross-border operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our approach to audit services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our audits with the highest level of honesty, transparency, and ethical standards. Our findings are always objective and unbiased.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Lightbulb className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering audit services of the highest quality, continuously improving our methodologies and staying updated with industry best practices.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-gray-600">
                We prioritize understanding our clients' unique needs and challenges, tailoring our audit approach to deliver maximum value and actionable insights.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance</h3>
              <p className="text-gray-600">
                We maintain a deep understanding of relevant regulations and compliance requirements, ensuring our audits reflect the latest standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
              <p className="text-gray-600">
                We handle all client information with the utmost confidentiality, implementing robust security measures to protect sensitive data.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                We invest in ongoing training and development, ensuring our team stays at the forefront of audit methodologies and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ensure Your Operations Meet the Highest Standards?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Schedule a consultation with our team to discuss your audit needs and how we can help strengthen your compliance posture.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;