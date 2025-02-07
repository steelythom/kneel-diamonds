import { metalOptionsHTML } from './metalOptions.js'
import { sizeOptionsHTML } from './sizeOptions.js'
import { styleOptionsHTML } from './styleOptions.js'
import { submitButtonHTML } from './submitButton.js'
import { ordersListHTML } from './ordersList.js'

document.addEventListener("orderSaved", event => {render()})

export const render = async () => {

    const metalsHTML = await metalOptionsHTML()
    const sizesHTML = await sizeOptionsHTML()
    const stylesHTML = await styleOptionsHTML()
    const submitHTML = await submitButtonHTML()
    const ordersHTML = await ordersListHTML()
    let HTML = ""

    HTML +=`<section class = "create-order">
                <div class="questions-container">
                    ${metalsHTML}
                    ${sizesHTML}
                    ${stylesHTML}
                </div>
                ${submitHTML}
            </section>`

    HTML +=`<section class="custom-orders">
                <h2>Custom Jewelry Orders</h2>
                ${ordersHTML}
            </section>`
    const container = document.querySelector("#container")
    container.innerHTML = HTML
}

render()