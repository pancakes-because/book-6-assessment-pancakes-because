
const applicationState = {
    letters: [], 
}

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (letters) => {
                // Store the external state in application state
                applicationState.letters = letters
            }
        )
}

// these are my "getter" functions for the modules 

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

// make fetch requests for authors, letters, recipients, and topics 

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            }
        )
}


export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data
            }
        )
}

// make a fetch reuqest post call for everything 

export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
    })
}