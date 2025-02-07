import { saveOrder } from "./transientState.js"
import { render } from "./main.js"

/*these 2 lines to represent the instance of the button*/
let buttonID = "submit"
let buttonLabel = "Create Custom Order"

const customEvent = new CustomEvent("orderSaved")
document.addEventListener("orderSaved", event => {render()})

/* the name of the function is instance specific */
export const submitButtonHTML = () => {
    document.addEventListener("click",clickHandler)
    let html = `<button id="${buttonID}">${buttonLabel}</button>`   
    return html
}

const clickHandler = async (clickEvent) => {
    if (clickEvent.target.id === buttonID) {
        /* instance specific processing for button cllick */
        await saveOrder()
        document.dispatchEvent(customEvent)
    }
}

