import React from "react";
import { motion } from "framer-motion";
import { Gem } from "lucide-react";

const Team = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary dark:text-white mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            At Brillaris Global, we are dreamers, innovators, creators, and educators united by a passion for making brilliance accessible.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-poppins font-semibold text-2xl text-primary dark:text-white mb-6">Our Team</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our team is a diverse blend of technologists, artists, educators, and strategists — each bringing a unique spark to a shared vision: to illuminate minds, inspire souls, and shape better futures.
            </p>
            
            <div className="mb-8">
              <h4 className="font-medium text-xl text-accent dark:text-blue-300 mb-3">Our Commitments</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Brillaris Global, our commitments define who we are and drive everything we create. We are committed to more than just building products — we are committed to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Gem className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Building trust, igniting creativity, and empowering progress across every industry</span>
                </li>
                <li className="flex items-start">
                  <Gem className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Leading with bold ideas and delivering ethical, sustainable, and future-ready solutions</span>
                </li>
                <li className="flex items-start">
                  <Gem className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Crafting experiences with intention, artistry, and meaning in every project</span>
                </li>
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6 bg-accent text-white dark:bg-accent/80 rounded-lg"
            >
              <h4 className="font-medium text-xl text-secondary mb-3">The Brillaris Promise</h4>
              <p className="mb-4">
                Brilliance in every solution. Grace in every interaction. Purpose in every step.
              </p>
              <p className="font-medium">
                Together, we educate, we innovate, we elevate. <br />
                Together, we are Brillaris.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="The Brillaris team collaborating" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.img 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Innovation at Brillaris" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <motion.img 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Educational technology at Brillaris" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;