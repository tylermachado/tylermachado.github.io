import React from "react"
import { Helmet } from "react-helmet"
import PortfolioCards from "../components/PortfolioCards.jsx"
import Talks from "../components/Talks.jsx"
import Footer from "../components/Footer.jsx"
import Navigation from "../components/Navigation.jsx"
import Resume from "../components/Resume.jsx"
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
            </div>
        </section>

        <section id="facts">
            <div id="facts-container">
                <div>
                    <h3>Location</h3>
                    <span>Boston, MA</span>
                </div>
                <div>
                    <h3>Pronouns</h3>
                    <span>he/him/his</span>
                </div>
                <div>
                    <h3>Email</h3>
                    <span>tyler.machado [at] gmail</span>
                </div>
                <div>
                    <h3>Github</h3>
                    <span><a href="//github.com/tylermachado" title="Tyler's Github">tylermachado</a></span>
                </div>
            </div>
        </section>


        <Resume />
        <PortfolioCards />
        <Talks />



        <Footer />
    </div>
)
