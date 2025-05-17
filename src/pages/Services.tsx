import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { ClipboardCheck, Search, BarChart3, Lock, Zap, ShieldCheck } from 'lucide-react';
import { Link } from '../components/Link';

interface ServicesProps {
  serviceSlug?: string;
}

const Services: React.FC<ServicesProps> = ({ serviceSlug }) => {
  const services = [
    {
      id: 'bpo',
      icon: <ClipboardCheck size={32} />,
      title: 'BPO Operations Audit',
      shortDescription: 'Comprehensive evaluation of voice and non-voice BPO operations.',
      fullDescription: 'Our BPO Operations Audit provides a thorough assessment of your business process outsourcing operations, focusing on service quality, compliance with client requirements, operational efficiency, and adherence to industry best practices. We examine call quality, data entry accuracy, customer service protocols, workforce management, and compliance with service level agreements.',
      benefits: [
        'Identify operational inefficiencies and quality gaps',
        'Ensure compliance with client requirements and SLAs',
        'Improve customer satisfaction metrics',
        'Optimize resource allocation and workforce management',
        'Enhance data security and privacy controls'
      ],
      process: [
        'Review of operational documentation and processes',
        'Call quality monitoring and assessment',
        'Data accuracy and security verification',
        'Compliance evaluation against industry standards',
        'Staff interviews and performance assessment',
        'Comprehensive report with actionable recommendations'
      ]
    },
    {
      id: 'kpo',
      icon: <Search size={32} />,
      title: 'KPO Compliance Verification',
      shortDescription: 'Detailed assessment of knowledge process operations.',
      fullDescription: 'Our KPO Compliance Verification service focuses on evaluating your knowledge process outsourcing operations for adherence to data handling protocols, accuracy of analytical outputs, compliance with industry regulations, and quality of deliverables. We examine research methodologies, data analysis processes, quality control mechanisms, and intellectual property protections.',
      benefits: [
        'Verify compliance with industry-specific regulations',
        'Ensure data integrity and analytical accuracy',
        'Protect intellectual property and confidential information',
        'Improve quality control processes',
        'Enhance client confidence in delivered outputs'
      ],
      process: [
        'Review of research and analytical methodologies',
        'Assessment of data handling and protection measures',
        'Evaluation of quality control procedures',
        'Verification of intellectual property safeguards',
        'Analysis of output accuracy and reliability',
        'Detailed report with specific improvement recommendations'
      ]
    },
    {
      id: 'social-media',
      icon: <BarChart3 size={32} />,
      title: 'Social Media Operations Audit',
      shortDescription: 'Evaluation of social media management operations.',
      fullDescription: 'Our Social Media Operations Audit examines your social media management services for Global clients, focusing on content compliance, account security, adherence to platform policies, brand guideline compliance, and crisis management preparedness. We assess content creation processes, approval workflows, account access controls, and response protocols.',
      benefits: [
        'Ensure compliance with platform policies and guidelines',
        'Strengthen account security and access controls',
        'Improve content approval and publishing workflows',
        'Enhance crisis management preparedness',
        'Verify adherence to client brand guidelines'
      ],
      process: [
        'Review of content creation and approval processes',
        'Assessment of account security measures',
        'Evaluation of platform policy compliance',
        'Analysis of response times and engagement metrics',
        'Verification of brand guideline adherence',
        'Comprehensive report with strategic recommendations'
      ]
    },
    {
      id: 'data-security',
      icon: <Lock size={32} />,
      title: 'Data Security Compliance',
      shortDescription: 'Thorough assessment of data security measures.',
      fullDescription: 'Our Data Security Compliance audit provides a comprehensive evaluation of your data protection measures, privacy controls, and compliance with international data protection regulations. We assess your technical safeguards, administrative controls, physical security measures, and staff awareness to identify potential vulnerabilities and compliance gaps.',
      benefits: [
        'Identify and address data security vulnerabilities',
        'Ensure compliance with GDPR, CCPA, and other regulations',
        'Strengthen data handling protocols and procedures',
        'Enhance staff awareness and security culture',
        'Build client confidence in your data protection measures'
      ],
      process: [
        'Assessment of technical security controls',
        'Review of data handling policies and procedures',
        'Evaluation of physical security measures',
        'Staff interviews regarding security awareness',
        'Gap analysis against relevant regulations',
        'Detailed report with prioritized security recommendations'
      ]
    },
    {
      id: 'process',
      icon: <Zap size={32} />,
      title: 'Process Efficiency Evaluation',
      shortDescription: 'Analysis of operational workflows to identify inefficiencies.',
      fullDescription: 'Our Process Efficiency Evaluation analyzes your operational workflows to identify bottlenecks, redundancies, and opportunities for optimization. We examine process documentation, workflow design, task allocation, technology utilization, and resource management to help you improve operational efficiency and reduce costs.',
      benefits: [
        'Identify and eliminate process bottlenecks',
        'Reduce operational costs and resource waste',
        'Improve turnaround times and productivity',
        'Enhance quality through streamlined workflows',
        'Optimize technology utilization'
      ],
      process: [
        'Process mapping and documentation review',
        'Time and motion studies for key processes',
        'Analysis of resource allocation and utilization',
        'Technology assessment and integration evaluation',
        'Identification of automation opportunities',
        'Comprehensive report with efficiency improvement recommendations'
      ]
    },
    {
      id: 'risk',
      icon: <ShieldCheck size={32} />,
      title: 'Risk Management Consulting',
      shortDescription: 'Expert guidance on identifying and mitigating operational risks.',
      fullDescription: 'Our Risk Management Consulting service provides expert guidance on identifying, assessing, and mitigating operational risks in your outsourced business processes. We help you develop robust risk management frameworks, contingency plans, and monitoring mechanisms to protect your operations from potential disruptions and compliance issues.',
      benefits: [
        'Identify and prioritize operational risks',
        'Develop effective risk mitigation strategies',
        'Improve business continuity planning',
        'Enhance compliance with regulatory requirements',
        'Build resilience against operational disruptions'
      ],
      process: [
        'Comprehensive risk assessment and analysis',
        'Development of risk management frameworks',
        'Creation of mitigation strategies and controls',
        'Design of monitoring and reporting mechanisms',
        'Business continuity and disaster recovery planning',
        'Detailed implementation roadmap and recommendations'
      ]
    }
  ];

  // If a specific service is requested
  if (serviceSlug) {
    const service = services.find(s => s.id === serviceSlug);
    
    if (!service) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
            <Link to="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              View All Services
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Hero 
          title={service.title}
          subtitle={service.fullDescription}
          backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        
        {/* Service Details Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 mb-8">{service.fullDescription}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Process Section */}
    <section className="bg-gray-50 h-[95vh] py-4 lg:py-2 flex items-center">
  <div className="container mx-auto px-4">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold mb-3">Our Approach</h2>
      <p className="text-gray-600 text-base max-w-2xl mx-auto">
        We follow a structured methodology to ensure comprehensive and actionable audit results.
      </p>
    </div>
    
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {service.process.map((step, index) => (
          <div key={index} className="relative">
            {/* Connecting line - slightly thicker */}
            {index < service.process.length - 1 && (
              <div className="absolute left-8 top-14 bottom-0 w-1 bg-blue-400 hidden sm:block"></div>
            )}
            
            <div className="flex flex-col sm:flex-row items-center items-start gap-4">
              {/* Number bubble - medium size */}
              <div className="flex-shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold shadow-md z-10">
                {index + 1}
              </div>
              
              {/* Content box - more padding */}
              <div className="flex-grow bg-white rounded-lg shadow p-4 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 text-base">{step}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Call to action - medium size */}

  </div>
</section>
        
        {/* CTA Section */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your {service.title.split(' ')[0]} Operations?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Contact us today to discuss how our {service.title} can help your business maintain compliance and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
                Schedule a Consultation
              </Link>
              <Link to="/services" className="inline-block bg-transparent border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
                Explore Other Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Main services page
  return (
    <div>
      <Hero 
        title="Our Comprehensive Audit Services"
        subtitle="Specialized audit solutions for BPO, KPO, and Social Media operations serving Global clients."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Audit Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our audit services are designed to help Indian operations serving global clients maintain the highest standards of compliance, security, and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                link={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Audit team working"
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Audit Services</h2>
              <p className="text-gray-600 mb-8">
                Our specialized approach to auditing operations that serve GLobal clients sets us apart and ensures you receive maximum value from our services.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deep Industry Expertise</h3>
                  <p className="text-gray-600">
                    Our team brings extensive experience in BPO, KPO, and social media operations, understanding the unique challenges and compliance requirements of these industries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Compliance Focus</h3>
                  <p className="text-gray-600">
                    We specialize in Global regulatory requirements and client expectations, ensuring your operations meet the standards expected by American businesses.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Actionable Recommendations</h3>
                  <p className="text-gray-600">
                    Our audit findings include detailed, practical recommendations that you can implement to improve compliance and operational efficiency.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We don't just provide an audit report and leave. Our team offers ongoing guidance to help you implement our recommendations and maintain compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Compliance Posture?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact our team today to discuss your audit needs and how we can help ensure your operations meet the highest standards.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;