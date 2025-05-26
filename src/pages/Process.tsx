import React from 'react';
import Hero from '../components/Hero';
import ProcessStep from '../components/ProcessStep';
import {
  ClipboardCheck,
  Settings,
  MessageSquare,
  FileText,
  PenTool as Tool,
  HeartHandshake
} from 'lucide-react';
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
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Refined Auditing Framework</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        A 6-step process designed for precision, transparency, and results—ensuring every audit delivers measurable value.
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      {/* Step 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
            alt="Requirement Briefing" 
            className="w-full h-auto"
          />
        </div>
        <div>
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <MessageSquare className="text-blue-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">1. Requirement Briefing</h3>
          <p className="text-gray-600">
            We begin by gathering a detailed understanding of your service needs and defining success metrics within mutually agreed SLAs and pricing terms.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="order-2 md:order-1">
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <FileText className="text-blue-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">2. Secure Data Transfer</h3>
          <p className="text-gray-600">
            Client recordings and related data are securely transferred to our servers through encrypted channels, ensuring complete confidentiality and data integrity.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg" 
            alt="Secure Data Transfer" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="Team Resource Allocation" 
            className="w-full h-auto"
          />
        </div>
        <div>
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <Settings className="text-blue-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">3. Resource Deployment</h3>
          <p className="text-gray-600">
            Based on project scope, we assign qualified auditors and configure required tools to deliver efficient and accurate results.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="order-2 md:order-1">
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <ClipboardCheck className="text-blue-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">4. Call Analysis</h3>
          <p className="text-gray-600">
            Our auditors follow a structured checklist to review each call recording, identifying compliance gaps and improvement areas through detailed logs.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg" 
            alt="Call Analysis Process" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/8296981/pexels-photo-8296981.jpeg" 
            alt="Quality Review" 
            className="w-full h-auto"
          />
        </div>
        <div>
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <Tool className="text-blue-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">5. Quality Validation</h3>
          <p className="text-gray-600">
            Every report is cross-verified for consistency and accuracy, ensuring that the final findings reflect facts and meet the pre-defined quality benchmarks.
          </p>
        </div>
      </div>

      {/* Step 6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="order-2 md:order-1">
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <HeartHandshake className="text-blue-600" size={24} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">6. Final Delivery & Data Sanitization</h3>
          <p className="text-gray-600">
            Once vetted, the final audit report is securely delivered. All call recordings are returned, and our systems are purged of client data per our privacy policy.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg" 
            alt="Final Delivery" 
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
      {/* <section className="py-20 bg-blue-700 text-white">
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
      </section> */} 
    </div>
  );
};

export default Process;