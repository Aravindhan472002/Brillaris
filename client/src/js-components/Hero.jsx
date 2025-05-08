import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { scrollToElement } from "../lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-accent to-accent/90 text-white overflow-hidden"
    >
      {/* Hero background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/80 to-primary/80"></div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute hidden md:block right-0 top-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute hidden md:block left-20 bottom-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-block">
                <span className="bg-secondary/90 text-accent px-4 py-1 rounded-full text-sm font-medium">
                  Technology • Creativity • Education
                </span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Where <span className="text-secondary">Innovation</span> Meets <span className="text-secondary">Inspiration</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
                At Brillaris, we're building a brighter tomorrow through transformative solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Button
                  size="lg"
                  className="bg-secondary text-accent hover:bg-secondary/90 transition-all duration-300 font-medium"
                  onClick={() => scrollToElement("services")}
                >
                  Explore Our Solutions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300"
                  onClick={() => scrollToElement("contact")}
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1 border-l-4 border-secondary pl-4">
                <p className="font-poppins font-medium text-lg text-secondary">
                  educate | innovate | elevate
                </p>
                <p className="text-gray-300">Together, we are Brillaris.</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:col-span-2 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-secondary/40 rounded-full blur-xl"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
                
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discover Excellence</h3>
                    <p className="text-white/80">Innovation is the heart of everything we do at Brillaris Global.</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 h-16 rounded flex items-center justify-center border border-white/10">
                      <span className="text-center text-sm">IT Solutions</span>
                    </div>
                    <div className="bg-white/5 h-16 rounded flex items-center justify-center border border-white/10">
                      <span className="text-center text-sm">Music Production</span>
                    </div>
                    <div className="bg-white/5 h-16 rounded flex items-center justify-center border border-white/10">
                      <span className="text-center text-sm">Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;