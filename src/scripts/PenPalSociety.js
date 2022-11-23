/* We're making the html for the whole website here */ 
/* For the other modules, each one holds a function that creates that module's own html */ 
/* Import each module's function here, so we can fill out the body of the website */ 


import { Authors } from "./Authors.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipients.js"
import { Letters } from "./Letters.js"
import { sendLetter } from "./dataAccess.js"


export const PenPalSociety = () => {

    return `
        <h1>Pen Pal Society</h1>

        <section> 
            <p>Author</p> 
            <select name="Authors" id="Authors" class="Authors">
                ${Authors()}
            </select>
        </section> 

        <section> 
            <p>Letter</p>
            <textarea id="letterBody" name="letterBody"></textarea>
        </section> 
        
        <section> 
            <p>Topics</p>
            <div name="topics" id="topics" class="Topics">
                ${Topics()}
            </div>
        </section> 

        <section> 
            <p>Recipient</p>
            <select name="Recipients" id="Recipients" class="Recipients">
                ${Recipients()}
            </select>
            </section> 

        <section> 
            <button id="button">Send Letter</button>
        </section> 

        <section class="Letters">
            <h2>Letters</h2>
            ${Letters()}
        </section>
    `
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "button") {

        // Get what the user typed into the form fields

        const author = document.querySelector("#Authors").value
        const recipient = document.querySelector("#Recipients").value
        const topic = document.querySelector("#topics").value
        const content = document.querySelector("textarea[name='letterBody']").value

    
            const letter = {

                authorId: parseInt(author), 
                recipientId: parseInt(recipient), 
                topicsId: parseInt(topic), 
                content: content,  
                sentat: new Date().toString()

            }

            console.log(letter)
            

            sendLetter(letter)
        }
    }
)


