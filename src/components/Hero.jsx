import React from "react"
import "../styles/hero.scss"

export default (props) => (
    <section id="hero">
        <div class="container">
            <div>
                <img src="../../static/headshot-gradient-circle.png" alt="Tyler Machado" className="hero-img" />
            </div>
            <div className="herotext">
                <h1>Hi, I'm Tyler Machado.</h1>
                <p>I'm a front-end web developer designer, and data visualization specialist with a decade of experience in digital news. I use technology and design to build engaging, illuminating tools and creative new ways to tell stories. I'm statistically literate, process-oriented, and highly organized (in that spreadsheet-for-<em>everything</em> type of way).</p>
            </div>
        </div>
        <div class="triangle-bottom">
        </div>
    </section>
)
