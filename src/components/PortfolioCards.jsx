import React from "react"
import Masonry from 'react-masonry-component';
import "../styles/masonry.scss"
import portfolio from "../../content/portfolio.json"
import SectionHeader from "../components/SectionHeader.jsx"

class PortfolioCards extends React.Component {
    constructor(props) {
        super(props);
        this.clickActive = this.clickActive.bind(this);
    }

    state = {
        clicked: null
    }

    clickActive(ind) {
        this.setState({clicked: ind})
        // this.masonry.layout()
    }

    render() {
        const childElements = portfolio
            .filter((project) => {return project.show === 1})
            .map((project, index) => {
                return (
                    <div
                    key={`content_item_${index}`}
                    className={this.state.clicked === index ? "portfolio-card active" : "portfolio-card"}
                    onClick={() => this.clickActive(index)}>
                        <img alt={project.title} src={`../../static/screenshots/${project.screenshot}`} />
                        <div className="title">{project.title}</div>
                        {
                            project.publication === 'personal' ?
                            '' :
                            <div className="subhed">{project.publication}</div>

                        }
                        <div className="blurb">
                            <span dangerouslySetInnerHTML={{__html:project.blurb}}></span>
                            &nbsp;
                            <a href={project.link}>check it out</a>
                        </div>
                    </div>
                )
            });

        return (
            <div class="container">
                <div id="work">
                  <SectionHeader words="Selected Work" />
                      <Masonry
                            className={'masonry-container'}
                            elementType={'div'}
                            disableImagesLoaded={false}
                            updateOnEachImageLoad={false}
                            enableResizableChildren={true}
                        >
                            {childElements}
                        </Masonry>
                </div>
            </div>
        )
    } //render
} // class PortfolioCards
export default PortfolioCards
