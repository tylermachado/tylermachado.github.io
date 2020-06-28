import React from "react"
import "../styles/hero.scss"

export default (props) => (
    <section id="hero">
        <div class="container">
            <div>
                <img src="../../static/gardenportrait.jpg" alt="" className="hero-img" />
            </div>
            <div className="herotext">
                <h2>Hi, I'm Tyler.</h2>
                <p>I'm a design-minded, data-literate front-end web developer with a decade of work in digital news media. I like to build creative, illuminating, data-driven experiences and tools.</p>
            </div>
        </div>
        <div class="triangle">
        </div>
    </section>
)
