import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary dark:text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Welcome to Brillaris Global — where innovation meets inspiration.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-70 dark:opacity-30"></div>
            <img 
              src="/images/about-content.png" 
              alt="About Brillaris Global" 
              className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              At Brillaris, technology, creativity and education are the pillars of a brighter tomorrow. Our journey is fueled by the spirit of brilliance and the elegance of purposeful creation. We are passionate about building transformative IT solutions, producing soulful music experiences and empowering minds through educational support.
            </p>
            
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-primary dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our goal is to create a world where technology, music, and education connect seamlessly, unlocking new possibilities for individuals, businesses, and communities.
            </p>
            
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-primary dark:text-white mb-4">Our Mission</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <span>To deliver cutting-edge IT applications that empower businesses and simplify lives.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <span>To craft music productions that resonate with hearts and inspire creativity.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <span>To support education initiatives that nurture future-ready, lifelong learners.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;