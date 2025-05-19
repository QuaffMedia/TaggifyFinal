import React from 'react';
import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from '../components/Link';

const Clients: React.FC = () => {
  const testimonials = [
    {
      quote: "At LEO1 by Financepeer, we're transforming education finance through innovation and trust—empowering students and institutions with sustainable solutions to make quality education accessible to all. Our journey has just begun",
      author: "Rohit Gajbhiye",
      position: "Founder",
      company: "LEO1 by Financepeer"
    },
    {
      quote: "The audit team's deep understanding of KPO operations and US compliance requirements provided us with actionable insights that significantly improved our quality standards.",
      author: "Anuj Bajpai",
      position: "CEO",
      company: "Hungama Digital Entertainment"
    },
    {
      quote: "Their social media operations audit was eye-opening. They identified several compliance risks we weren't aware of and provided clear guidance on how to address them.",
      author: "Vikram Singh",
      position: "Head of Digital",
      company: "SocialEdge Management"
    },
    {
      quote: "The audit team's strong grasp of KPO processes and US compliance standards delivered valuable insights that greatly enhanced our operational quality.",
      author: "Ojasvi Babber",
      position: "CEO",
      company: " Amity Venture Funds"
    },
    {
      quote: "The data security audit conducted by TrustAudit helped us achieve full compliance with our Global clients' requirements. Their expertise in cross-border data regulations was particularly valuable.",
      author: "Suresh Kumar",
      position: "IT Director",
      company: "Secure Data Solutions"
    },
    {
      quote: "Working with TrustAudit transformed our quality management system. Their insights helped us implement processes that consistently meet and exceed our Global clients' expectations.",
      author: "Ritu Patel",
      position: "Quality Head",
      company: "VoiceSupport International"
    }
  ];

  const caseStudies = [
    {
      title: "BPO Call Quality Transformation",
      client: "Leading Voice-Based BPO",
      challenge: "Facing declining quality scores and compliance issues in customer service operations for US financial clients.",
      solution: "Comprehensive audit of call quality, compliance processes, and agent training, followed by implementation of enhanced monitoring systems and training programs.",
      results: [
        "37% reduction in compliance issues",
        "26% improvement in quality scores",
        "Client renewed contract with expanded scope"
      ]
    },
    {
      title: "Data Security Enhancement",
      client: "Research and Analytics KPO",
      challenge: "Vulnerabilities in data protection protocols threatening relationship with US legal clients.",
      solution: "Thorough security audit followed by implementation of enhanced access controls, encryption, and staff security training.",
      results: [
        "Zero data security incidents post-implementation",
        "Successfully passed client security audit",
        "Secured ISO 27001 certification"
      ]
    },
    {
      title: "Social Media Compliance Overhaul",
      client: "Digital Marketing Agency",
      challenge: "Repeated policy violations and content compliance issues in social media management for Global brands.",
      solution: "Audit of content processes and compliance protocols, followed by implementation of structured approval workflows and compliance training.",
      results: [
        "85% reduction in policy violations",
        "Improved client satisfaction scores",
        "Secured three new major Global clients"
      ]
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Clients and Success Stories"
        subtitle="Discover how our audit services have helped businesses improve their operations and compliance."
        backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
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
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with a wide range of businesses serving Global clients across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Customer Support" className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">Customer Support</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.pexels.com/photos/6476810/pexels-photo-6476810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Financial Services" className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">Financial Services</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.pexels.com/photos/315791/pexels-photo-315791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Healthcare" className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">Healthcare</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.pexels.com/photos/4342498/pexels-photo-4342498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="E-commerce" className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">E-commerce</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Technology" className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">Technology</h3>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Legal Services" className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">Legal Services</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore real-world examples of how our audit services have helped businesses transform their operations.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{caseStudy.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1.5"></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-700 text-white p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-4">Ready for Similar Results?</h4>
                      <p className="mb-6">
                        Our tailored audit approach can help your business achieve compliance excellence and operational efficiency.
                      </p>
                      <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                        Contact Us Today
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Indicators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Clients Trust Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've earned the trust of businesses across India through our commitment to excellence, integrity, and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">50+</div>
              <h3 className="text-xl font-semibold mb-2">Clients Served</h3>
              <p className="text-gray-600">
                We've partnered with over 50 businesses serving Global clients across various industries.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">200+</div>
              <h3 className="text-xl font-semibold mb-2">Audits Completed</h3>
              <p className="text-gray-600">
                Our team has successfully conducted over 200 comprehensive audits.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">98%</div>
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                98% of our clients report being highly satisfied with our audit services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">85%</div>
              <h3 className="text-xl font-semibold mb-2">Repeat Business</h3>
              <p className="text-gray-600">
                85% of our clients return for additional audit services and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Discover how our audit services can help your business maintain compliance and operational excellence when serving Global clients.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;