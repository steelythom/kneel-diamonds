export const createRadioButton = (id, label, value = id, checked = false) => {

    let newRadioButton = {
        "id":id,
        "label":label,
        "value":value
    }
    return newRadioButton
}

export const radioButtonGroupHTML = 
    (groupName,
     question,
     buttons,
     defaultIndex = 0) => {
    
    let html = `<div class="question-group">
                    <div class="question-title">${question}</div>
                    <div radio-container>`
    let htmlAsArray = buttons.map(
        (button) => {
                return `<div class="radio-option">
                                <input type="radio" name="${groupName}"
                                            id="${button.id}"
                                            value="${button.value}">
                                <label>${button.label}</label>
                        </div>`;
        }
    ) 
    html += htmlAsArray.join('') ;
       html +=     `</div>
                </div>`
    return html
}    

