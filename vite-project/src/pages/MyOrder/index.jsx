import { useContext} from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
  const {order} = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length - 1

    return (
      <Layout>
        <div className="flex items-center justify-center w-80 relative mb-5">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className="size-4 text-black"/>
          </Link>
          <h1>My Order</h1>
        </div>
        <div className="flex flex-col w-80">
                {
                    order?.[index]?.products.map(product => (
                        <OrderCard  
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            image={product.image}
                            price={product.price}
                        />
                    ))
                }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder
  