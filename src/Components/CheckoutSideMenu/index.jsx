import { useContext } from "react"
import { Link } from "react-router-dom"
import './styles.css'
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { TotalPrice } from "../../utils"
import OrderCard from "../OrderCard"



const CheckoutSideMenu = () => {
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setCount, count, setOrder, order,setSearchByTitle} = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(count - 1)
    }   

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.24',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: TotalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd]),
        setCartProducts([],
        setCount(0),
        setSearchByTitle(null),
        closeCheckoutSideMenu()
        )
    }

    return (
        <aside className= {`${isCheckoutSideMenuOpen ? 'flex' :  'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`} >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={() => closeCheckoutSideMenu()}><XMarkIcon className="size-6 text-black"/></button>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    cartProducts.map(product => (
                        <OrderCard  
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            image={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>

            <div className="px-6 mb-6">
                <p className="flex justify-between mb-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-lg">{TotalPrice(cartProducts)}</span>
                </p>

                <Link to='/my-orders/last'>
                    <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu