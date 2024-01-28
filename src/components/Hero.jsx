import React from "react"
import "../styles/hero.scss"

export default (props) => (
    <section id="hero">
        <div className="hero__container">
            <div className="hero__image-container">
            </div>
            <div className="hero__text fadein">
                <h1>Tyler Machado</h1>
                <div className="hero_job-title">Front-end developer</div>
                <div className="hero_job-title">Digital designer</div>
                <div className="hero_job-title">Data visualization specialist</div>
            </div>
        </div>
    </section>
)
