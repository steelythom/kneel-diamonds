import { createRadioButton, radioButtonGroupHTML } from "./radioButton.js"
import { setSelectedSize } from "./transientState.js"

let sizes = []

export const sizeOptionsHTML = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    sizes = await response.json()
    const buttons = []
    for (const size of sizes) {
        buttons.push(
            createRadioButton(size.id,size.carets,size.price)
        )
    }

    return radioButtonGroupHTML("sizes","Sizes",buttons)
}
// document.addEventListener("change", sizeChanged)
// const sizeChanged = (event) => {
document.addEventListener("change", (event) => {
    if (event.target.name === "sizes") {
        setSelectedSize(sizes.find(size => parseInt(size.id) === parseInt(event.target.id)))
    }
})
