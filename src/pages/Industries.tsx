import React from 'react';
import Hero from '../components/Hero';
import { Headphones, BarChart3, FileText, MessageSquare, Database, FileSearch } from 'lucide-react';
import { Link } from '../components/Link';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Headphones size={40} className="text-blue-600" />,
      title: "Voice-based BPO Operations",
      description: "Comprehensive audits for call centers and customer support operations serving Global clients, focusing on call quality, script compliance, and customer experience.",
      benefits: [
        "Call quality assessment against industry benchmarks",
        "Script adherence and compliance verification",
        "Customer experience evaluation",
        "Operational efficiency analysis",
        "Agent performance assessment"
      ]
    },
    {
      icon: <FileText size={40} className="text-blue-600" />,
      title: "Back-office Processing Centers",
      description: "Thorough evaluation of data processing, form handling, and transaction processing operations, ensuring accuracy, security, and compliance with US standards.",
      benefits: [
        "Data accuracy and quality assessment",
        "Process efficiency evaluation",
        "Compliance with US data handling requirements",
        "Security protocols verification",
        "Error rate analysis and reduction strategies"
      ]
    },
    {
      icon: <BarChart3 size={40} className="text-blue-600" />,
      title: "Knowledge Process Outsourcing",
      description: "Specialized audits for KPO operations providing research, analytics, and knowledge-based services to Global clients, focusing on quality and intellectual property protection.",
      benefits: [
        "Research methodology and quality assessment",
        "Intellectual property protection verification",
        "Analytical accuracy evaluation",
        "Industry-specific compliance verification",
        "Output quality and consistency analysis"
      ]
    },
    {
      icon: <MessageSquare size={40} className="text-blue-600" />,
      title: "Social Media Content Management",
      description: "Comprehensive audits for social media management operations serving Global clients, ensuring content compliance, account security, and adherence to platform policies.",
      benefits: [
        "Content compliance and quality assessment",
        "Platform policy adherence verification",
        "Brand guideline compliance evaluation",
        "Account security and access control review",
        "Crisis management preparedness assessment"
      ]
    },
    {
      icon: <Database size={40} className="text-blue-600" />,
      title: "Data Processing Centers",
      description: "Thorough evaluation of data entry, digitization, and data management operations, focusing on accuracy, efficiency, and data security protocols.",
      benefits: [
        "Data entry accuracy and quality assessment",
        "Process efficiency evaluation",
        "Data security protocols verification",
        "Compliance with data protection regulations",
        "Error reduction and quality improvement strategies"
      ]
    },
    {
      icon: <FileSearch size={40} className="text-blue-600" />,
      title: "Customer Support Operations",
      description: "Comprehensive audits for email, chat, and ticket-based customer support operations, ensuring service quality, response times, and resolution effectiveness.",
      benefits: [
        "Response quality and accuracy assessment",
        "Service level agreement compliance verification",
        "Resolution effectiveness evaluation",
        "Knowledge base utilization analysis",
        "Customer satisfaction measurement"
      ]
    }
  ];

  return (
    <div>
      <Hero 
        title="Industries We Serve"
        subtitle="Specialized audit solutions tailored to the unique needs of different operational models serving US clients."
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Industries Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Industry Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide specialized audit solutions for a wide range of operations that serve US clients, with deep expertise in the unique compliance requirements and operational challenges of each industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <h4 className="font-medium mb-2">Key Focus Areas:</h4>
                <ul className="space-y-1">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compliance Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Industry-Specific Compliance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each industry serving US clients has unique compliance requirements that must be addressed through specialized audit approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Data Privacy & Security</h3>
              <p className="text-gray-600 mb-6">
                Operations handling US customer data must comply with regulations like CCPA, GDPR (for international customers), and industry-specific requirements like HIPAA for healthcare data.
              </p>
              <p className="text-gray-600">
                Our audits verify the implementation of appropriate technical safeguards, access controls, encryption, and data handling protocols to maintain compliance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Quality Management</h3>
              <p className="text-gray-600 mb-6">
                US clients expect consistent, high-quality outputs that meet specific standards and requirements, particularly in knowledge-intensive operations like research and analysis.
              </p>
              <p className="text-gray-600">
                Our audits assess quality management systems, review processes, output consistency, and error rates to ensure operations meet US client expectations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Information Security</h3>
              <p className="text-gray-600 mb-6">
                Operations serving US clients must implement robust information security measures to protect sensitive data and intellectual property, often requiring certification against standards like ISO 27001.
              </p>
              <p className="text-gray-600">
                Our audits evaluate security controls, incident response procedures, vulnerability management, and employee security awareness to ensure comprehensive protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how our industry-specific audit approaches have helped businesses improve their operations and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-3">Voice BPO Operations Transformation</h3>
              <p className="text-gray-700 mb-4">
                A leading voice-based BPO serving US financial clients was struggling with quality issues and compliance concerns. Our comprehensive audit identified critical gaps in call monitoring, script compliance, and customer data handling.
              </p>
              <p className="text-gray-700 mb-4">
                We provided detailed recommendations for enhancing quality monitoring, implementing robust data security measures, and improving agent training.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Results:</p>
                  <ul className="space-y-1 mt-2">
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">37% reduction in compliance issues</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">26% improvement in quality scores</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">Client renewed contract with expanded scope</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-3">KPO Data Security Enhancement</h3>
              <p className="text-gray-700 mb-4">
                A KPO providing research and analysis services to US legal firms faced challenges with data security and intellectual property protection. Our audit revealed vulnerabilities in access controls, data transfer protocols, and IP protection measures.
              </p>
              <p className="text-gray-700 mb-4">
                We recommended a comprehensive overhaul of security protocols, implementation of robust access controls, and enhanced staff training on data protection.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Results:</p>
                  <ul className="space-y-1 mt-2">
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">100% elimination of unauthorized access incidents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">Successfully passed client security audit</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                      <span className="text-gray-600">Secured ISO 27001 certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Industry-Specific Compliance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact us today to discuss how our specialized audit services can help your business maintain the highest standards of compliance and operational excellence.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;