import React from "react"
import { Helmet } from "react-helmet"

import About from "../components/About.jsx"
// import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"
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
          <title>Tyler Machado: web developer, designer and data visualization specialist in Boston, MA</title>
          <link rel="canonical" href="//tylermachado.com" />
        </Helmet>

        <Navigation />
        <About />
        <Portfolio />
        <Resume />
        {/* <Contact /> */}

        <Footer />
    </div>
)
