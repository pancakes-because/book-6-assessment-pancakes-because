import { fetchLetters } from "./dataAccess.js"
import { fetchAuthors } from "./dataAccess.js"
import { fetchTopics } from "./dataAccess.js"
import { fetchRecipients } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
         fetchLetters()
        .then(() => fetchAuthors())
        .then(() => fetchTopics())
        .then(() => fetchRecipients())
        .then(
            () => {
                mainContainer.innerHTML = PenPalSociety()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)