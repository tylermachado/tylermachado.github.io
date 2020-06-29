import React from "react"
import "../styles/hero.scss"

export default (props) => (
    <section id="hero">
        <div class="container">
            <div>
                <div class="section-top-border"></div>
                <img src="../../static/grad450.jpg" alt="" className="hero-img" />
            </div>
            <div className="herotext">
                <h1>Hi, I'm Tyler Machado.</h1>
                <p>I'm a design-minded, data-literate front-end web developer living in Boston, Massachusetts. I have a decade of experience in digital news media, making tech and design work for readers and producers alike. I like to build creative, illuminating, data-driven experiences and tools.</p>
            </div>
        </div>
        <div class="triangle-bottom">
        </div>
    </section>
)
