import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const { setSearchByTitle, filteredItems} = useContext(ShoppingCartContext)
  
  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <p>No results found</p>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search for a product" 
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
