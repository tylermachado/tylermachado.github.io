import React from "react"
import "../styles/masonry.css"
import talks from "../../content/talks.json"
import SectionHeader from "../components/SectionHeader.jsx"

const Talks = () => (
    <div>
      <SectionHeader words="Talks and Writing" />
      <ul>
          {talks
              .map((talk, index) =>
              {
                return (

                    <li key={`content_item_${index}`} className="">
                        <a href={talk.link} alt={talk.title}>{talk.title}</a>, {talk.source}
                    </li>


                )
          })}
      </ul>
    </div>
)
export default Talks
