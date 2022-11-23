/* This module will make the section/input field for "Topics" */ 

import { getTopics } from "./dataAccess.js"

export const Topics = () => {

    const topics = getTopics()

    let html = topics.map(
        topic => {
            return `<input type="radio" name="topics" id="topics" value="${topic.id}">${topic.category}</input>`
        }
    ).join("")

    return html
}