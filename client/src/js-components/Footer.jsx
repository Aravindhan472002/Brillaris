import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import LogoSVG from "./LogoSVG.jsx";
import { scrollToElement } from "../lib/utils.js";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  quickLinks: [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Solutions", id: "services" },
    { name: "Who We Are", id: "team" },
    { name: "Contact", id: "contact" },
  ],
  services: [
    { name: "IT Applications", id: "services" },
    { name: "Music Production", id: "services" },
    { name: "Educational Support", id: "services" },
    { name: "Digital Transformation", id: "services" },
    { name: "Custom Solutions", id: "services" },
  ],
};

const Footer = () => {
  const handleLinkClick = (id) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-primary dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <LogoSVG className="h-12 mb-4" />
            <p className="text-gray-300 mb-4">
              Where innovation meets inspiration.
            </p>
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Brillaris Global. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(service.id);
                    }}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-l-md rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-800"
              />
              <Button type="submit" className="bg-secondary text-accent rounded-l-none hover:bg-secondary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            Designed with ❤️ by Brillaris Design Team
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;