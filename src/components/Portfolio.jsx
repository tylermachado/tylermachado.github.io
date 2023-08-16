import React from "react"
import "../styles/masonry.scss"
import portfolio from "../../content/portfolio.json"
import SectionHeader from "./SectionHeader.jsx"

const disciplines = ["Data visualizations and interactive graphics", "Interactive web tools", "WordPress blocks and themes", "Visual design and branding", "Web maps"];

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.clickActive = this.clickActive.bind(this);
        this.clickOut = this.clickOut.bind(this);
        this.filterPortfolio = this.filterPortfolio.bind(this);
    }

    state = {
        clicked: null
    }

    clickActive(ind) {
        this.setState({clicked: ind})
        console.log("clicked item")
    }

    clickOut() {
        this.setState({clicked: null})
        console.log("clicked OUTSIDE")
    }

    filterPortfolio(discipline) {
        portfolio.filter((project) => {
            return project.category.split(', ').indexOf(discipline) > -1
                && project.show === 1;
        }).map((project, index) => {
            return (
                <div
                    key={`portfolio-card__id-${index}`}
                    className="portfolio-card"
                >
                    <img alt={project.title} src={`../../static/screenshots/${project.screenshot}`} />
                    <div className="portfolio-card__title">{project.title}</div>
                    <div className="portfolio-card__subhed">{project.publication}</div>
                    <div className="portfolio-card__blurb">
                        <span dangerouslySetInnerHTML={{ __html: project.blurb }}></span>
                        &nbsp;
                        <a className="linkout" href={project.link}>check it out</a>
                    </div>
                </div>
            )
        });
    }

    render() {
        const workCategories = disciplines.map((discipline, index) => {
            return (
                <div
                    key={`portfolio-section__${index}`}
                    className={`portfolio-section__${index}`}
                >
                    <h3>{discipline}</h3>
                    {
                        portfolio.filter((project) => {
                            return project.category.split(', ').indexOf(discipline) > -1
                                && project.show === 1;
                        }).map((project, index) => {
                            return (
                                <div
                                    key={`portfolio-card__id-${index}`}
                                    className="portfolio-card"
                                >
                                    <img alt={project.title} src={`../../static/screenshots/${project.screenshot}`} />
                                    <div className="portfolio-card__title">{project.title}</div>
                                    <div className="portfolio-card__subhed">{project.publication}</div>
                                    <div className="portfolio-card__blurb">
                                        <span dangerouslySetInnerHTML={{ __html: project.blurb }}></span>
                                        &nbsp;
                                        <a className="linkout" href={project.link}>check it out</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        });

        return (
            <section id="portfolio" className="fadein">
                <div class="portfolio__container">
                    <SectionHeader words="Portfolio" />
                    {workCategories}
                </div>
            </section>
        )
    } //render
} // class PortfolioCards
export default Portfolio
