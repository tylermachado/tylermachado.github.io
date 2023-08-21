import React from "react"
import "../styles/nav.scss"

export default (props) => (
    <header id="nav" className="fadein">
        <div className="backdrop">
            <div className="container">
                <ul>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#resume">Resume</a></li>
                </ul>
            </div>
        </div>
    </header>
)
