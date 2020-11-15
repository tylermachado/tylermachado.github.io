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
                <p>I'm a front-end web developer, designer and editor with a decade of experience in digital news. I use technology and design to build creative, illuminating experiences and tools. I'm data-literate, process-oriented, and highly organized (in that spreadsheet-for-<em>everything</em> type of way).</p>
            </div>
        </div>
        <div class="triangle-bottom">
        </div>
    </section>
)
