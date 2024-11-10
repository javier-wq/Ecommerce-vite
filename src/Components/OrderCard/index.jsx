import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const {  id, title, image, price, handleDelete } = props
    return (
        <div className="flex justify-between mb-3">
            <div className='flex items-center gap-3'>
                <figure className='w-20 h-20'>
                    <img src={image} alt={title} className='w-full h-full rounded-lg object-cover'/>
                </figure>
                <p className='text-xs font-light px-4'>{title}</p> 
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-medium'>
                    ${price}
                </p>
                <button>
                    {
                        handleDelete && <XMarkIcon className="size-4 text-black" onClick={() => handleDelete(id)}/>
                    }
                </button>
                
            </div>
        </div>
    )
}

export default OrderCard