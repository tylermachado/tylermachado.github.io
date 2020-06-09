import React from "react"
import PortfolioCards from "../components/portfolio-cards.jsx"
import Talks from "../components/Talks.jsx"
import "../styles/global.css"

export default () => (
    <div id="bodyContainer">
        <section id="hero">
            <img src="../../static/gardenportrait.jpg" alt="" className="hero" />
            <div className="herotext">
                <h1>Hello, I'm Tyler.</h1>
                <p>I'm a design-minded, data-literate web developer with a decade of work in digital news media. I'm all about creative, illuminating experiences for users, backed by robust processes for producers.</p>
            </div>
        </section>

        <PortfolioCards />
        <Talks />
    </div>
)
