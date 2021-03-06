import React from "react"
import "../styles/hero.scss"

export default (props) => (
    <section id="hero">
        <div className="container fadein">
            <div>
                <img src="../../static/headshot-gradient-circle.png" alt="Tyler Machado" className="hero-img" />
            </div>
            <div className="herotext">
                <h1>Hi, I'm Tyler Machado.</h1>
                <p>I'm a front-end web developer, designer, and data visualization specialist. I have a decade of experience in digital media building useful tools, telling engaging stories, and creating sustainable processes.</p>
            </div>
        </div>
        <div className="triangle-bottom">
        </div>
    </section>
)
