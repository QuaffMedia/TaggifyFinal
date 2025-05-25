import React from 'react';
import Hero from '../components/Hero';
import ProcessStep from '../components/ProcessStep';
import { ClipboardCheck, Settings, MessageSquare, FileText, PenTool as Tool, HeartHandshake } from 'lucide-react';
import { Link } from '../components/Link';

const Process: React.FC = () => {
  const faqs = [
    {
      question: "How long does a typical audit take?",
      answer: "The duration of an audit depends on the scope and complexity of your operations. A standard audit typically takes 2-4 weeks from initial consultation to the delivery of the final report. Larger operations or more complex audits may require additional time."
    },
    {
      question: "How do you ensure the confidentiality of our business information?",
      answer: "We take confidentiality very seriously. All our team members sign strict NDAs, and we implement secure data handling protocols. Our audit processes are designed to protect sensitive information, and we only access information that is necessary for the audit scope."
    },
    {
      question: "Will the audit disrupt our daily operations?",
      answer: "We design our audit process to minimize disruption to your business. While we do need to observe operations and interview key personnel, we work around your schedule and prioritize non-intrusive evaluation methods whenever possible."
    },
    {
      question: "What happens after the audit is complete?",
      answer: "After the audit, we provide a comprehensive report with detailed findings and recommendations. We schedule a presentation meeting to walk through the results and answer any questions. We also offer follow-up support to help implement our recommendations."
    },
    {
      question: "How often should we conduct an audit?",
      answer: "For operations serving Global Clients, we recommend conducting a comprehensive audit annually, with smaller check-in audits quarterly or semi-annually. This ensures ongoing compliance and allows for timely identification of emerging issues."
    },
    {
      question: "Can you help with preparing for client audits?",
      answer: "Yes, we offer pre-client audit preparation services. We can help you identify and address potential issues before your Global Clients conduct their own audits, increasing your chances of success and strengthening client confidence."
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Audit Process"
        subtitle="A structured, thorough approach to evaluating and improving your operations serving Global Clients."
        backgroundImage="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Process Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Structured Approach to Excellence</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our audit methodology follows a comprehensive, structured approach that ensures thorough evaluation and actionable insights.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7681076/pexels-photo-7681076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Initial consultation"
                  className="w-full h-auto"
                />
              </div>
              
              <div>
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <MessageSquare className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">1. Initial Consultation</h3>
                <p className="text-gray-600 mb-4">
                  We begin by understanding your operations, requirements, and specific compliance needs. This initial discussion helps us tailor our audit approach to your unique circumstances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Comprehensive discussion of your operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Identification of key compliance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Preliminary assessment of potential focus areas</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="order-2 md:order-1">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <Settings className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">2. Scope Definition</h3>
                <p className="text-gray-600 mb-4">
                  We define the scope of the audit, outlining areas to be evaluated and establishing clear objectives. This ensures a focused approach that addresses your most critical needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Detailed scope document outlining audit parameters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Agreement on timeframes and deliverables</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Definition of success criteria and expected outcomes</span>
                  </li>
                </ul>
              </div>
              
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Scope definition"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Audit execution"
                  className="w-full h-auto"
                />
              </div>
              
              <div>
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <ClipboardCheck className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">3. Audit Execution</h3>
                <p className="text-gray-600 mb-4">
                  Our team conducts a thorough on-site evaluation, examining processes, documentation, and compliance measures. We use a combination of observation, interviews, and document review to gather comprehensive data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Process observation and evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Staff interviews and skill assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Documentation review and compliance verification</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="order-2 md:order-1">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">4. Findings Documentation</h3>
                <p className="text-gray-600 mb-4">
                  We document our observations, compliance issues, and areas for improvement in a comprehensive report. Our findings are presented with clear evidence and context to ensure understanding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Detailed documentation of observations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Analysis of compliance gaps and operational inefficiencies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Prioritization of issues based on risk and impact</span>
                  </li>
                </ul>
              </div>
              
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7681891/pexels-photo-7681891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Documentation process"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Recommendations discussion"
                  className="w-full h-auto"
                />
              </div>
              
              <div>
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <Tool className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">5. Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Based on our findings, we provide detailed recommendations to address issues and enhance compliance. Our recommendations are practical, prioritized, and tailored to your specific situation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Specific, actionable improvement strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Prioritized implementation roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Cost-benefit analysis of recommended changes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <HeartHandshake className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">6. Follow-up Support</h3>
                <p className="text-gray-600 mb-4">
                  We offer ongoing support to help implement recommended changes and ensure sustained compliance. Our team remains available to address questions and provide guidance as needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Implementation guidance and support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Progress check-ins and milestone reviews</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span className="text-gray-600">Ongoing advisory support for emerging compliance issues</span>
                  </li>
                </ul>
              </div>
              
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7654609/pexels-photo-7654609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Follow-up support"
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about our audit process and methodology.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Audit Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact us today to schedule an initial consultation and discover how our structured audit process can help your business achieve compliance excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Schedule a Consultation
            </Link>
            <Link to="/services" className="inline-block bg-transparent border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;