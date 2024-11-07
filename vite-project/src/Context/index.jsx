import { createContext, useState } from "react"
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ( {children} ) => {
    const [count, setCount] = useState(0)

    // Product detail Open & Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product detail show product
    const [productToShow, setProductToShow] = useState({})

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
        }
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}