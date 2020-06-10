import React from "react"
import { Helmet } from "react-helmet"
import PortfolioCards from "../components/PortfolioCards.jsx"
import Talks from "../components/Talks.jsx"
import Footer from "../components/Footer.jsx"
import Navigation from "../components/Navigation.jsx"
import "../styles/global.css"

export default () => (
    <div id="bodyContainer">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tyler Machado: web developer and data visualization specialist in Boston, MA</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <Navigation />

        <section id="hero">
            <img src="../../static/gardenportrait.jpg" alt="" className="hero" />
            <div className="herotext">
                <h2>Hello, I'm Tyler.</h2>
                <p>I'm a design-minded, data-literate web developer with a decade of work in digital news media. I like to build creative, illuminating experiences for users, backed by robust processes for producers.</p>
                <p>Feel free to get in touch! My email address is tyler.machado [at] gmail.com</p>
            </div>
        </section>

        <PortfolioCards />
        <Talks />
        <Footer />
    </div>
)
