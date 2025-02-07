import { createRadioButton, radioButtonGroupHTML } from "./radioButton.js"
import { setSelectedMetal } from "./transientState.js"

let metals = []

export const metalOptionsHTML = async () => {
    const response = await fetch("http://localhost:8088/metals")
    metals = await response.json()
    const buttons = []
    for (const metal of metals) {
        buttons.push(
            createRadioButton(metal.id,metal.metal,metal.price)
        )
        metal.value = metal.price
        metal.label = metal.metal
    }
    return radioButtonGroupHTML("metals","Metals",buttons)
}

document.addEventListener("change", (event) => {
    if (event.target.name === "metals") {
        setSelectedMetal(metals.find(metal => parseInt(metal.id) === parseInt(event.target.id)))
    }
})