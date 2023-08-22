import React from "react"
import { Helmet } from "react-helmet"

import About from "../components/About.jsx"
// import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero.jsx"
import Navigation from "../components/Navigation.jsx"
import Portfolio from "../components/Portfolio.jsx"
import Resume from "../components/Resume.jsx"

import "../styles/global.scss"
import "../styles/global-animations.scss"

export default () => (
    <div id="bodyContainer">
        <Helmet>
          <meta charSet="utf-8" />
         <meta name="description" content="A web developer/designer specializing in data visualization, working from Boston, Massachusetts."/>  
        <meta property="og:title" content="Tyler Machado: portfolio website" />
        <meta property="og:description" content="I'm a web developer/designer specializing in data visualization, working from Boston, Massachusetts." />
        <meta property="og:image" content="../../static/pic-23.jpeg" />
          <title>Tyler Machado: web developer, designer and data visualization specialist in Boston, MA</title>
          <link rel="canonical" href="//tylermachado.com" />

        </Helmet>

        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        {/* <Contact /> */}

        <Footer />
    </div>
)
