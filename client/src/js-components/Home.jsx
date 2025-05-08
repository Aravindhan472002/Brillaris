import React from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Team from "./Team.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
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