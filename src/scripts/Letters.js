/* This module will make the section/input field for "Letter" */

import { getLetters } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { getTopics } from "./dataAccess.js"
import { getRecipients } from "./dataAccess.js"

export const Letters = () => {

    const letters = getLetters()

    let html = letters.map(
        letter => {
            html += `<ul>${letters.map(${letter.content})</ul>`
                }
        ).join("")
    
        return html 
} 