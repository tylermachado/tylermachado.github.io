import React from "react"
import "../styles/masonry.scss"
import talks from "../../content/talks.json"
import SectionHeader from "../components/SectionHeader.jsx"

const Talks = () => (
    <section id="talks">
        <div class="container narrow">
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
    </section>
)
export default Talks
