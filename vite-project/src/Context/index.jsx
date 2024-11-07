import { createContext, useState } from "react"
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ( {children} ) => {
    const [count, setCount] = useState(0)
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
        }
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}