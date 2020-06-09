import React from "react"
import PortfolioCards from "../components/PortfolioCards.jsx"
import Talks from "../components/Talks.jsx"
import Footer from "../components/Footer.jsx"
import Navigation from "../components/Navigation.jsx"
import "../styles/global.css"

export default () => (
    <div id="bodyContainer">
        <Navigation />

        <section id="hero">
            <img src="../../static/gardenportrait.jpg" alt="" className="hero" />
            <div className="herotext">
                <h1>Hello, I'm Tyler.</h1>
                <p>I'm a design-minded, data-literate web developer with a decade of work in digital news media. I like to build creative, illuminating experiences for users, backed by robust processes for producers.</p>
            </div>
        </section>

        <PortfolioCards />
        <Talks />
        <Footer />
    </div>
)