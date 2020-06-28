import React from "react"
import "../styles/nav.scss"

export default (props) => (
    <header id="nav">
        <div className="container">
            <ul>
                <li><a href="/#work">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#talks">Talks</a></li>
            </ul>
        </div>
    </header>
)
