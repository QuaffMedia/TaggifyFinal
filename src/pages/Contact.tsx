import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your audit needs and how we can help ensure your operations meet the highest standards."
        backgroundImage="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our audit services? Our team is here to help. Contact us through the form or using the information below.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      65, Sector-12, HUDA, Panipat, Haryana - 132103, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +91-8005540849‬

                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      audit@taggify.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Clock className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours (IST) </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-gray-600">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md">
                {/* <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.3890649689256!2d76.95913557624761!3d29.656560239482252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4b867dc3e899%3A0x328880de4181933c!2sSector%2012%2C%20HUDA%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1715345523461!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe> */}
              </div>
            </div>
            
            <div>
              <ContactForm />
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
              Common questions about working with us and our audit services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">How quickly can you start an audit?</h3>
                <p className="text-gray-600">
                  After the initial consultation and scope definition, we can typically begin the audit within 1-2 weeks, depending on the complexity and size of your operations.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">Do you offer remote audit services?</h3>
                <p className="text-gray-600">
                  While we prefer on-site evaluations for comprehensive audits, we do offer remote audit options for certain aspects of the audit process, especially for preliminary assessments and follow-up reviews.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">What information do you need before starting an audit?</h3>
                <p className="text-gray-600">
                  We typically request an overview of your operations, current process documentation, organizational structure, client requirements, and any previous audit reports. We'll provide a detailed information request during the scoping phase.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3">Can you help with specific industry compliance requirements?</h3>
                <p className="text-gray-600">
                  Yes, our team has expertise in various industry-specific compliance requirements, including those for financial services, healthcare, e-commerce, and technology sectors serving US clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ensure Your Operations Meet the Highest Standards?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Contact us today to start your journey towards operational excellence and full compliance.
          </p>
          <a href="#contact-form" className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;