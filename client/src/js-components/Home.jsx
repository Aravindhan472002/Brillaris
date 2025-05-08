import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Brillaris Global - Where Innovation Meets Inspiration</title>
        <meta name="description" content="Brillaris Global - Where technology, creativity and education unite to create transformative IT solutions, soulful music experiences, and empower minds through educational support." />
        <meta property="og:title" content="Brillaris Global - Technology, Creativity, Education" />
        <meta property="og:description" content="Building a brighter tomorrow through innovative technology, creative music production, and educational empowerment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brillaris.global" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;