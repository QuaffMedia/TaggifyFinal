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
      quote: "The audit team's strong grasp of KPO processes and US compliance standards delivered valuable insights that greatly enhanced our operational quality.",
      author: "Ojasvi Babber",
      position: "CEO",
      company: " Amity Venture Funds",
      linkedin: "https://in.linkedin.com/in/ojasvi"
    },
    
    
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
      
      {/* Industries We Serve Section */}
     <section className="py-20 bg-gray-50 overflow-hidden">
  <div className="w-full px-3">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Clients We’ve Worked With</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        A glimpse of organizations we’ve proudly served across public and private sectors.
      </p>
    </div>

    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {Array(2)
          .fill([
            {
              name: "Indian Oil Corporation",
              logo: "https://1000logos.net/wp-content/uploads/2021/05/Indian-Oil-logo.png"
            },
            {
              name: "Hindustan Petroleum Corporation",
              logo: "https://companieslogo.com/img/orig/HINDPETRO.NS_BIG-0a9e5b8b.png"
            },
            {
              name: "Ministry of Education",
              logo: "https://www.education.gov.in/sites/upload_files/mhrd/files/logo.png"
            },
            {
              name: "National Informatics Centre",
              logo: "https://www.nic.in/wp-content/uploads/2020/12/NIC-logo.png"
            },
            
            {
              name: "ICICI Bank",
              logo: "https://companieslogo.com/img/orig/ICICIBANK.NS_BIG-0a9e5b8b.png"
            },
            {
              name: "Reliance Communications",
              logo: "https://logonoid.com/images/reliance-communications-logo.png"
            },
            {
              name: "Honda Cars",
              logo: "https://images.app.goo.gl/Y93NoqwjFaXacAvV7"
            },
            {
              name: "Whirlpool",
              logo: "https://1000logos.net/wp-content/uploads/2021/05/Whirlpool-logo.png"
            },
            {
              name: "Amul",
              logo: "https://1000logos.net/wp-content/uploads/2021/05/Amul-logo.png"
            }
          ])
          .flat()
          .map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 text-center w-48 mx-2"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 object-contain mx-auto mb-4"
              />
              <h3 className="font-semibold text-sm">{client.name}</h3>
            </div>
          ))}
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