import React from "react"
import "../styles/masonry.css"
import portfolio from "../../content/portfolio.json"
import SectionHeader from "../components/SectionHeader.jsx"

const PortfolioCards = () => (
    <div id="work">
      <SectionHeader words="Selected Work" />
      <div id="colsContainer" className="cols">
          {portfolio
              .filter((project) => {return project.show == 1})
              .map((project, index) =>
              {
                return (

                    <div key={`content_item_${index}`} className="portfolio-card">
                        <a href={project.link}>
                            <div>
                                <img alt={project.title} src={`../../static/screenshots/${project.screenshot}`} />
                                <div>{project.title}</div>
                                {
                                    project.publication == 'personal' ?
                                    '' :
                                    <div className="subhed">{project.publication}</div>
                                }
                                {/* <h4>{project.publication}, {project.date}</h4> */}
                            </div>
                        </a>
                    </div>


                )
          })}
      </div>
    </div>
)
export default PortfolioCards
