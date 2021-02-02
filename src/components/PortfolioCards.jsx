import React from "react"
import Masonry from 'react-masonry-component';
import "../styles/masonry.scss"
import portfolio from "../../content/portfolio.json"
import SectionHeader from "../components/SectionHeader.jsx"

const masonryOptions = {columnWidth: '.masonry-sizer'}

class PortfolioCards extends React.Component {
    constructor(props) {
        super(props);
        this.clickActive = this.clickActive.bind(this);
        this.clickOut = this.clickOut.bind(this);
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
                            <a className="linkout" href={project.link}>check it out</a>
                        </div>
                    </div>
                )
            });

        return (
            <div class="container">
                <div id="work" className="fadein">
                  <SectionHeader words="Selected Work" />
                      <Masonry
                            className={'masonry-container'}
                            elementType={'div'}
                            options={masonryOptions}
                            disableImagesLoaded={false}
                            updateOnEachImageLoad={false}
                            enableResizableChildren={false}
                        >
                            <div class="masonry-sizer"></div>
                            {childElements}
                        </Masonry>
                </div>
            </div>
        )
    } //render
} // class PortfolioCards
export default PortfolioCards
