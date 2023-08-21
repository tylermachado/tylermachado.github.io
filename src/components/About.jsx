import React from "react"
import "../styles/about.scss"

export default (props) => (
    <section id="about">
        <div className="container">
            <div className="about__image-container">
                <img src="../../static/headshot-gradient-circle.png" alt="Tyler Machado" className="hero-img" />
            </div>
            <div className="about__text-container container fadein">
                <div className="about__text">
                    <h1>Hi, I'm Tyler Machado.</h1>
                    <p>I'm a front-end web developer and digital designer from Boston. I do my best work in hybrid roles where data, design and development come together — building digital experiences that are both visually engaging and delightfully usable.</p>
                    <p>I've got more than a decade of experience in digital media, working across agency, in-house and freelance positions, with a focus on collaborating with nonprofit and independent media organizations. I've co-led conference sessions at SRCCON events and Boston University’s Storytelling With Data workshops.</p>
                </div>
            </div>
        </div>
    </section>
)
