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
                    <h1>Tyler Machado</h1>
                    <p>I’m a front-end web developer and digital designer from Boston with more than a decade of experience in digital media. I do my best work in hybrid roles where data, design and development come together — building usable and visually engaging experiences for the web.</p>
                    <p>Things to know about me:</p>
                    <ul>
                        <li>My resume includes agency, in-house and freelance positions, most frequently collaborating with nonprofit and independent media organizations. (I also worked fully remotely even before 2020.)</li>
                        <li>I spent the beginning of my career as a web producer for media outlets and this continues to inform my work to this day. Those roles taught me to be interdisciplinary by default, and a relentless self-organizer.</li>
                        <li>I’ve co-led conference sessions at SRCCON events and Boston University’s Storytelling With Data workshops.</li>
                        <li>As a freelancer, I built web graphics for Science News, Journalist’s Resource, and the New England Revolution soccer team.</li>
                        <li>I have a professional certificate in Data Science from Harvard Extension School, and a B.A. in Journalism and Mass Communication from Saint Michael's College in Vermont.</li>
                        <li>Apart from my data science graduate classwork, I've also taken a course on DJing with turntables. I don't consider a week complete until I've watched at least three soccer matches. New England road trips are my specialty.</li>
                    </ul>
                    <p>Want to chat more? I'm at <pre>tyler [dot] machado [at] gmail</pre>. (Air fryer recipes are especially welcome.)</p>
                </div>
            </div>
        </div>
    </section>
)
