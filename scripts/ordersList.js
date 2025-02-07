export const ordersListHTML = async () => {
    // Fetch data from the API
    const [ordersResponse, metalsResponse, stylesResponse, sizesResponse] = await Promise.all([
        fetch("http://localhost:8088/orders"),
        fetch("http://localhost:8088/metals"),
        fetch("http://localhost:8088/styles"),
        fetch("http://localhost:8088/sizes")
    ]);

    const orders = await ordersResponse.json();
    const metals = await metalsResponse.json();
    const styles = await stylesResponse.json();
    const sizes = await sizesResponse.json();

    // Map over orders and join with related data
    const ordersHTMLArray = orders.map(order => {
        const metal = metals.find(m => m.id === order.metalId);
        const style = styles.find(s => s.id === order.styleId);
        const size = sizes.find(s => s.id === order.sizeId);

        return `
            <div class="order-list-item-container">
                <div>Metal: ${metal ? metal.metal : 'Not found'}</div>
                <div>Size: ${size ? size.carets : 'Not found'} carats</div>
                <div>Style: ${style ? style.style : 'Not found'}</div>
                <div>Price: $${order.price.toFixed(2)}</div>
                <div>Timestamp: ${new Date(order.timestamp).toLocaleString()}</div>
            </div>
        `;
    });
    

    // Return the HTML string

    return `<div class="order-list-container">
                ${ordersHTMLArray.join("")}
            </div>`
}