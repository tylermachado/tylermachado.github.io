import React from "react"
import SectionHeader from "../components/SectionHeader.jsx"
import "../styles/about.scss"

export default (props) => (
    <section id="about">
        <SectionHeader words="About" />
        <div class="container">
            <div className="about__text-container container fadein">
                <div className="about__text">
                    <p>Things to know about me:</p>
                    <ul>
                        <li>My resume includes agency, in-house and freelance positions, most frequently collaborating with nonprofit and independent media organizations.</li>
                        <li>I’ve co-led conference sessions at SRCCON events and Boston University’s Storytelling With Data workshops.</li>
                        <li>As a freelancer, I built web graphics for Science News, Journalist’s Resource, and the New England Revolution soccer team.</li>
                        <li>I spent the beginning of my career as a web producer for media outlets and this continues to inform my work. Those roles taught me to be interdisciplinary by default, instead of constrained by the usual defined roles, and required me to be deeply disciplined and self-organized.</li>
                        <li>I have a professional certificate in Data Science from Harvard Extension School, and a B.A. in Journalism and Mass Communication from Saint Michael's College in Vermont.</li>
                        <li>Apart from my data science graduate classwork, I've also taken a course on DJing with turntables. I don't consider a week complete until I've watched at least three soccer matches. New England road trips are my specialty.</li>
                    </ul>
                    <p>Want to chat more? I'm at <pre>tyler [dot] machado [at] gmail</pre>. (Air fryer recipes are especially welcome.)</p>
                </div>
            </div>
        </div>
    </section>
)
