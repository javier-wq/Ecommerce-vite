import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const {count, setSearchByCategory, setSignOut, signOut} = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    // Sign Out
    const sign_Out = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(sign_Out)
    const isUserSignOut = signOut || parsedSignOut

    const handleSignOut = () => {
        const stringfiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringfiedSignOut)
        setSignOut(true)
    }

    const renderView = () => {
        if (isUserSignOut) {
            return (
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                        Sign Out
                    </NavLink>
                </li>
            )
        } else {
            return (
                <>
                    <li className="text-black/60">
                        javiermonge247@gmail.com
                    </li>
                    <li>
                        <NavLink 
                            to='/my-orders'
                            className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/my-account'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/sign-in'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={() => handleSignOut()}>
                            Sign Out
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <ShoppingBagIcon className="size-6 text-black"/>
                        <div> {count} </div>   
                </li>
                </>
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => setSearchByCategory('')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/womens-clothing'
                    onClick={() => setSearchByCategory("women's clothing")}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Womens clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/mens-clothing'
                    onClick={() => setSearchByCategory("men's clothing")}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Mens clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/jewelery'
                    onClick={() => setSearchByCategory('jewelery')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => setSearchByCategory('electronics')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
               {renderView()}
                <li className="flex items-center">
                    <ShoppingBagIcon className="size-6 text-black"/>
                    <div> {count} </div>   
                </li>
            </ul>
        </nav>
    )
}

export default Navbar