import React from "react"
import { Helmet } from "react-helmet"
import PortfolioCards from "../components/PortfolioCards.jsx"
import Talks from "../components/Talks.jsx"
import Footer from "../components/Footer.jsx"
import Hero from "../components/Hero.jsx"
import Facts from "../components/Facts.jsx"
import Navigation from "../components/Navigation.jsx"
import Resume from "../components/Resume.jsx"
import "../styles/global.scss"

export default () => (
    <div id="bodyContainer">
        <Helmet>
          <meta charSet="utf-8" />
         <meta name="description" content="A web developer/designer specializing in data visualization, working from Boston, Massachusetts."/>
          <title>Tyler Machado: web developer and data visualization specialist in Boston, MA</title>
          <link rel="canonical" href="//tylermachado.com" />
        </Helmet>

        <Navigation />

        <Hero />
        <Facts />
        <PortfolioCards />
        <Resume />
        <Talks />

        <Footer />
    </div>
)
