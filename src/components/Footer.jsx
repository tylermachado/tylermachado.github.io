import React from "react"

let date = new Date();

export default (props) => (
    <footer>
        <div>&copy; {date.getFullYear()} Tyler Machado.</div>
        <div>This site was built with: HTML, CSS, <a href="https://gatsbyjs.org/">Gatsby</a>, <a href="//sheets.google.com/">Google Sheets</a>, and <a href="//fonts.google.com/">Google Fonts</a>.</div>
    </footer>
)
