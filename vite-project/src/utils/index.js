export const TotalPrice = (products) => {
    //((accumulator, currentValue) => accumulator + currentValue, initialValue,
    return products.reduce((sum,product) => sum + product.price, 0)
}