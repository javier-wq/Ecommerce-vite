export const TotalPrice = (products) => {
    //((accumulator, currentValue) => accumulator + currentValue, initialValue,
    return products.reduce((sum,product) => sum + product.price, 0)
}

export const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
}