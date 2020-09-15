import React from "react"
import "../styles/facts.scss"

export default (props) => (
    <section id="facts">
        <div class="container narrow">
            <div id="facts-container">
                <div>
                    <h3>Location</h3>
                    <span>Boston, MA</span>
                </div>
                <div>
                    <h3>Pronouns</h3>
                    <span>he/him/his</span>
                </div>
                <div>
                    <h3>Github</h3>
                    <span><a href="//github.com/tylermachado" title="Tyler's Github">tylermachado</a></span>
                </div>
                <div>
                    <h3>Email</h3>
                    <span>tyler.machado [at] gmail</span>
                </div>
            </div>
        </div>
    </section>
)
