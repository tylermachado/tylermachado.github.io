import React from "react"
import { graphql } from "gatsby"
import jobs from "../../content/resume.json"
import "../styles/resume.scss"
import SectionHeader from "../components/SectionHeader.jsx"

const Resume = () => (
    <div id="resume">
        <div class="container">
          <SectionHeader words="Resume" />
          <p>This resume is also available <a href="../../static/tyler_machado_resume.pdf" title="Tyler Machado's resume as a PDF">in PDF format</a>.</p>
              {jobs
                  .map((job, index) =>
                  {
                    return (
                        <div key={`content_item_${index}`} className="job-listing">
                            <h3><a href={job.url} alt={job.workplace}>{job.workplace}</a></h3>
                            <span className="location">({job.location})</span>
                            <div className="titles">
                                {job.titles.map((title, index2) =>
                                    {
                                        return (
                                            <h4  key={`content_item_${index2}`} >{title}</h4>
                                        )
                                    }
                                )}
                                </div>
                            <ul>
                                {job.duties.map((duty, index3) =>
                                    {
                                        return (
                                            <li key={`content_item_${index3}`} >{duty}</li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>
                    )
              })}
        </div>
    </div>
)
export default Resume
