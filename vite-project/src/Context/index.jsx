import { createContext, useState, useEffect } from "react"
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

    // Adding products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart Order
    const [order, setOrder] = useState([])

    // Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null)
    console.log(searchByCategory);
    
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        console.log(items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase())));
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory ) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle,searchByCategory])

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
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}