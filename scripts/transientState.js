let currentOrder = {}
let selectedMetal = {}
let selectedSize = {}
let selectedStyle = {}

export const initializeTransientState = () => {
    currentOrder = {}
    selectedMetal = {}
    selectedSize = {}
    selectedStyle = {}
/*     currentOrder = {
        metalId: 0,
        sizeId: 0,
        styleId: 0,
        price: 0,
        timestamp: 0
    }

    selectedMetal = {
        id : 0,
        metal : "",
        price : 0
    }

    selectedStyle = {
        id : 0,
        style : "",
        price : 0
    }

    selectedSize = {
        id : 0,
        carets : 0,
        price : 0
    } */
}

export const setSelectedMetal = (metal) => {
    selectedMetal = metal
    setCurrentOrder()
    console.log(currentOrder)
}

export const setSelectedSize = (size) => {
    selectedSize = size
    setCurrentOrder()
    console.log(currentOrder)
}

export const setSelectedStyle = (style) => {
    selectedStyle = style
    setCurrentOrder()
    console.log(currentOrder)
}   

const calculateOrderPrice = () => {
    return selectedMetal.price 
         + selectedSize.price
         + selectedStyle.price
}

const setCurrentOrder = () => {
    currentOrder = {
        metalId: selectedMetal.id,
        sizeId: selectedSize.id,
        styleId: selectedStyle.id,
        price: parseFloat(calculateOrderPrice(),2),
        timestamp: Date.now()
    }
    console.log(currentOrder)
}



export const saveOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(currentOrder)
    }

    const response = await fetch ("http://localhost:8088/orders",postOptions)

    return response
} 
