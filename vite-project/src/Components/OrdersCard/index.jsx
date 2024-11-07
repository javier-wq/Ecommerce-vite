import { currentDate } from "../../utils"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const {  totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between mb-3 border border-black rounded-lg w-80 p-4 ">
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-medium'>Cantidad: {totalProducts}</span>
                    <span className='text-sm font-light'>{currentDate()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className='font-bold '>${totalPrice}</span>
                    <ChevronRightIcon className="size-4 text-black"/>
                </div>
            </p>
        </div>
    )
}

export default OrdersCard