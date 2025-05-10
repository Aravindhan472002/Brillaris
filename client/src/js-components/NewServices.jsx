import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";
import { scrollToElement } from "../lib/utils.js";
import { Circle, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Application Services",
        description: "Building Intelligent Solutions for a Brighter Future. At Brillaris Global, we transform ideas into powerful applications that connect, inspire, and drive success.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        features: [
            "Custom Web and Mobile Applications",
            "Educational Apps",
            "AI & Machine Learning Integration",
            "UI/UX Design and Consulting",
        ],
    },
    {
        title: "Digital Workplace Solutions",
        description: "Redefining How Work Happens. Our Digital Workplace solutions enhance collaboration, drive productivity, and enable innovation across your organization.",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        features: [
            "Intelligent Collaboration Tools",
            "Custom Digital Portals",
            "Learning & Development Ecosystems",
            "Virtual Studios & Creative Workspaces",
            "Secure & Scalable Solutions",
        ],
    },
    {
        title: "Tech Solutions & Integration",
        description: "Bringing Technology Together, Seamlessly. We design intelligent ecosystems that effortlessly connect people, ideas, and experiences.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        features: [
            "End-to-End IT Solutions",
            "System Integration",
            "API Development & Integration",
            "Cloud & Hybrid Infrastructure",
            "AI & Automation Integration",
            "Music & Creative Tech Solutions",
        ],
    },
];

const NewServices = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="newservices" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary dark:text-white mb-4">Services</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Discover how Brillaris Global empowers businesses, educators, and creatives with cutting-edge solutions.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants} className="service-card">
                            <Card className="h-full overflow-hidden rounded-xl dark:bg-gray-800 dark:border-gray-700">
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-primary dark:text-white">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <Circle className="text-secondary h-2 w-2 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => scrollToElement("contact")}
                                        className="inline-flex items-center text-primary dark:text-secondary font-medium hover:text-secondary dark:hover:text-secondary/80 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                    </button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default NewServices;