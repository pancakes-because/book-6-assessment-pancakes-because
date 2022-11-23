/* This module will make the section/input field for "Recipient" */ 

import { getRecipients } from "./dataAccess.js"

export const Recipients = () => {

    const recipients = getRecipients()

    let html = recipients.map(
        recipient => {
            return `<option name="Recipients" id="Recipients" value="${recipient.id}">${recipient.name}</option>`
        }
    ).join("")

    return html
}