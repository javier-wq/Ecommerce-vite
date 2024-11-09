import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const ShoppingCart = () => {
    const {openCheckoutSideMenu, closeProductDetail, cartProducts} = useContext(ShoppingCartContext)

    const openCheckouSideMenuBar = () => {
        openCheckoutSideMenu()
        closeProductDetail()
    }

    return (
        <div className="relative flex gap-0.5 items-center" onClick={() => openCheckouSideMenuBar()}>
            <ShoppingBagIcon className="w-6 h-6 fill-none stroke-black cursor-pointer"/>
            <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center roudned-full, bg-black w-4 h-4 text-xs text-white">
                {cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart