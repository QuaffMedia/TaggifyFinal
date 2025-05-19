import React from 'react';
import Hero from '../components/Hero';
import { Calendar, FileText, BookOpen, HelpCircle, Download, ArrowRight } from 'lucide-react';
import { Link } from '../components/Link';

const Resources: React.FC = () => {
  const resources = [
    {
      icon: <FileText size={40} className="text-blue-600" />,
      title: "US-India BPO Compliance Guide",
      description: "A comprehensive guide to understanding compliance requirements for Indian BPO operations serving Global clients.",
      downloadLink: "#"
    },
    {
      icon: <FileText size={40} className="text-blue-600" />,
      title: "Data Security Best Practices",
      description: "Essential security practices for protecting sensitive data in outsourced operations serving Global clients.",
      downloadLink: "#"
    },
    {
      icon: <FileText size={40} className="text-blue-600" />,
      title: "Audit Preparation Checklist",
      description: "A step-by-step checklist to help your business prepare for a comprehensive operational audit.",
      downloadLink: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Understanding CCPA Requirements for Indian BPOs",
      date: "June 15, 2023",
      excerpt: "The California Consumer Privacy Act (CCPA) has significant implications for Indian BPOs serving Global clients. This article explains the key requirements and how to ensure compliance.",
      link: "#",
      image: "https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Remote Work Security for Outsourcing Operations",
      date: "May 22, 2023",
      excerpt: "The shift to remote work presents unique security challenges for outsourcing operations. Learn how to maintain robust security in a distributed work environment.",
      link: "#",
      image: "https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Preparing for US Client Audits: A Comprehensive Guide",
      date: "April 10, 2023",
      excerpt: "US clients often conduct their own audits of outsourced operations. This guide helps you prepare effectively and navigate the audit process successfully.",
      link: "#",
      image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const faqs = [
    {
      question: "What compliance regulations apply to Indian BPOs serving US clients?",
      answer: "Indian BPOs serving Global clients must comply with various regulations depending on the industry and data handled. These may include GDPR (for international customers), CCPA, HIPAA (for healthcare data), PCI DSS (for payment information), and SOX (for financial data). Additionally, they must adhere to Indian regulations such as the Information Technology Act and any industry-specific requirements."
    },
    {
      question: "How often should we conduct internal audits?",
      answer: "For operations serving Global clients, we recommend conducting comprehensive internal audits at least annually, with smaller check-in audits quarterly or semi-annually. This ensures ongoing compliance and allows for timely identification of emerging issues. High-risk operations or those handling sensitive data may require more frequent audits."
    },
    {
      question: "What should we do to prepare for a client audit?",
      answer: "To prepare for a client audit, ensure all documentation is up to date, including process documentation, training records, security protocols, and compliance certifications. Conduct a pre-audit review to identify and address potential issues. Prepare your team by briefing them on the audit scope and ensuring key personnel are available. Finally, create a comfortable environment for the auditors and be transparent in all interactions."
    },
    {
      question: "What are the key security requirements for handling Global customer data?",
      answer: "Key security requirements include implementing strong access controls, data encryption (both in transit and at rest), secure authentication mechanisms, regular security assessments, comprehensive logging and monitoring, incident response procedures, and regular security training for staff. You should also maintain physical security measures for your facilities and ensure proper data backup and recovery procedures."
    },
    {
      question: "How can we ensure quality in our outsourced operations?",
      answer: "To ensure quality, implement a robust quality management system with clear metrics and standards. Conduct regular quality monitoring and provide ongoing training and feedback to staff. Establish effective client communication channels, implement proper technology and tools, and regularly solicit client feedback. Additionally, maintain a culture of continuous improvement by regularly reviewing and enhancing your processes."
    },
    {
      question: "What documentation should we maintain for compliance purposes?",
      answer: "Maintain comprehensive documentation including policies and procedures, training records, quality monitoring reports, security protocols, incident reports, client contracts and SLAs, compliance certifications, audit reports, risk assessments, and business continuity plans. Ensure all documentation is regularly updated and readily accessible when needed for audits or regulatory inquiries."
    }
  ];

  return (
    <div>
      <Hero 
        title="Resources & Insights"
        subtitle="Valuable information and guidance to help your business maintain compliance and operational excellence."
        backgroundImage="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Downloadable Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Downloadable Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access our library of guides, checklists, and templates to help improve your compliance and operational practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-8">
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.downloadLink} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Download <Download size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles on compliance, best practices, and industry trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href={post.link} 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Compliance Updates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Updates</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay current with the latest regulatory changes affecting outsourced operations serving US clients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Calendar size={14} className="mr-1" />
                <span>July 10, 2023</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Updated CCPA Enforcement Guidelines Released</h3>
              <p className="text-gray-600 mb-4">
                The California Attorney General's office has released updated enforcement guidelines for the California Consumer Privacy Act (CCPA), providing clarification on several key compliance areas affecting businesses that process data of California residents.
              </p>
              <p className="text-gray-600 mb-4">
                The updated guidelines place increased emphasis on data inventory requirements, consent management, and vendor oversight. Businesses serving US clients must ensure their data handling practices align with these updated requirements.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read Full Update <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <Calendar size={14} className="mr-1" />
                <span>May 28, 2023</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">New US Data Security Requirements for Offshore Service Providers</h3>
              <p className="text-gray-600 mb-4">
                The US Federal Trade Commission has announced new guidelines for companies outsourcing data processing activities to offshore service providers, with implications for Indian operations serving US clients.
              </p>
              <p className="text-gray-600 mb-4">
                The guidelines specify enhanced due diligence requirements, more stringent data protection provisions in service agreements, and increased monitoring obligations for US companies working with offshore service providers.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Read Full Update <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              View All Updates
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about compliance and operational requirements for businesses serving US clients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <HelpCircle className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Webinar Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-700 text-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-4">Upcoming Webinar</h2>
                <h3 className="text-xl font-semibold mb-6">Navigating US Compliance Requirements for Indian BPOs</h3>
                
                <div className="flex items-center mb-6">
                  <Calendar className="mr-2" size={20} />
                  <span>July 25, 2023 | 11:00 AM IST</span>
                </div>
                
                <p className="mb-6">
                  Join our compliance experts for a comprehensive webinar on the latest US regulatory requirements affecting Indian BPO operations. Learn practical strategies for maintaining compliance and protecting your client relationships.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span>Understanding key US regulations (CCPA, GDPR, HIPAA)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span>Implementing effective compliance programs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                    <span>Preparing for and managing client audits</span>
                  </div>
                </div>
                
                <a href="#" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                  Register Now
                </a>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Webinar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Personalized Guidance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Contact our team for tailored advice on your specific compliance and operational challenges.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Resources;