import { createRadioButton, radioButtonGroupHTML } from "./radioButton.js"
import { setSelectedStyle } from "./transientState.js"

let styles = []

export const styleOptionsHTML = async () => {
    const response = await fetch("http://localhost:8088/styles")
    styles = await response.json()
    const buttons = []
    for (const style of styles) {
        buttons.push(
            createRadioButton(style.id,style.style,style.price)
        )
    }
    return radioButtonGroupHTML("styles","Styles",buttons)
}

document.addEventListener("change", (event) => {
    if (event.target.name === "styles") {
        setSelectedStyle(styles.find(style => parseInt(style.id) === parseInt(event.target.id)))
        }
})