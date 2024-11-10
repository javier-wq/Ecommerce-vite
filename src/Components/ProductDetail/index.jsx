import { useContext } from "react"
import './styles.css'
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'


const ProductDetail = () => {
    const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

    return (
        <aside className= {`${isProductDetailOpen ? 'flex' :  'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`} >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button onClick={() => closeProductDetail()}><XMarkIcon className="size-6 text-black"/></button>
            </div>
            <figure className="px-6">
                <img src={productToShow.image} alt={productToShow.title} className="w-full h-full rounded-lg"/>
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xlc mb-2"> ${productToShow.price} </span>
                <span className="font-medium text-md"> {productToShow.title} </span>
                <span className="font-light text-sm"> {productToShow.description} </span>
            </p>
        </aside>
    )
}

export default ProductDetail