import React from "react"
import "../styles/portfolio.scss"
import portfolio from "../../content/portfolio.json"
import SectionHeader from "./SectionHeader.jsx"

const disciplines = ["Data visualizations and interactive graphics", "Interactive web tools", "WordPress blocks and themes", "Visual design and branding", "Web maps"];

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen = (event) => {
        event.target.parentElement.classList.toggle('open');
        event.target.nextSibling.classList.toggle('open');
    }

    render() {
        const workCategories = disciplines.map((discipline, index) => {
            return (
                <div
                    key={`portfolio-section__${index}`}
                    className={`portfolio-section container`}
                >
                    <h3 onClick={this.toggleOpen}>{discipline}</h3>
                    <div className='portfolio__card-container'>
                    {
                        portfolio.filter((project) => {
                            return project.category.split(', ').indexOf(discipline) > -1
                                && project.show === 1;
                        }).map((project, index) => {
                            return (
                                <a
                                    href={project.link}
                                    key={`portfolio-card__id-${index}`}
                                    className="portfolio-card__link"
                                >
                                    <div
                                        className="portfolio-card"
                                    >
                                        <img alt={project.title} src={`../../screenshots/${project.screenshot}`} />
                                        <div className="portfolio-card__title">{project.title}</div>
                                        <div className="portfolio-card__subhed">{project.publication}</div>
                                    </div>
                                </a>
                            )
                        })
                    }
                    </div>
                </div>
            )
        });

        return (
            <section id="portfolio" className="fadein">
                <div className="portfolio__container">
                    <SectionHeader words="Portfolio" />
                    {workCategories}
                </div>
            </section>
        )
    } //render
} // class PortfolioCards
export default Portfolio
