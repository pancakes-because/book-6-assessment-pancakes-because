/* This module will make the section/input field for "Author" */

import { getAuthors } from "./dataAccess.js"

export const Authors = () => {

    const authors = getAuthors()

    let html = authors.map(
        author => {
            return `<option name="Authors" id="Authors" value="${author.id}">${author.name}</option>`
        }
    ).join("")

    return html
}