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
                <p>I'm a design-minded, data-literate front-end web developer with a decade of experience in digital news. I use technology and design to build creative, illuminating, data-driven experiences and tools.</p>
            </div>
        </div>
        <div class="triangle-bottom">
        </div>
    </section>
)
