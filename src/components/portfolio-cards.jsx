import React from "react"
import "../styles/masonry.css"
import portfolio from "../../content/portfolio.json"



const PortfolioCards = () => (
  <div id="colsContainer" className="cols">
      {portfolio
          .filter((project) => {return project.show == 1})
          .map((project, index) =>
          {
            return (
                <div key={`content_item_${index}`} className="box portfolio-card">
                    <img alt=" " src={`https://source.unsplash.com/random/300x${((index*4)+320)}`} />
                    <h3>{project.title}</h3>
                    <h4>{project.publication}, {project.date}</h4>
                </div>
            )
      })}
  </div>
)
export default PortfolioCards
