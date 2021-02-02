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
                <p>I'm a front-end web developer, designer, and data visualization specialist with a decade of experience in digital media. I use tech, data, and design to build illuminating tools and tell engaging stories. I thrive in the space where art meets science, and I'm passionate about figuring out systems that improve creativity and understanding.</p>
            </div>
        </div>
        <div className="triangle-bottom">
        </div>
    </section>
)
