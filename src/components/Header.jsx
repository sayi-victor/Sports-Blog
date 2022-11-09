import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const navLinks = ["Latest News", "Transfer News", "Breaking News"]
    const [menu, setMenu] = useState(false);

    return (
        <nav className='bg-gray-800 z-20 border-b border-b-gray-500 min-h-10 p-2 fixed w-screen text-white flex flex-col justify-center'>
            <div className="flex flex-row flex-nowrap w-full">
                <div className='font-bold pl-2 text-lg basis-2/3 sm:basis-1/5'>
                    <Link to="/"> My Blog </Link>
                </div>
                <div className="flex flex-row justify-end basis-1/3 sm:basis-4/5 pr-2">
                    <div className="hidden sm:flex sm:basis-full justify-evenly">
                        {navLinks.map((link, index) => <Link key={index} to={"/" + link.toLowerCase().replace(/ /g, "-")}> {link} </Link>)}
                    </div>
                    <button className="sm:hidden" onClick={()=>setMenu(!menu)}>
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </button>
                </div>
                </div>
                { menu &&
                 <div className="text-gray-300 flex mt-1 flex-col border-t border-t-gray-700">
                    {navLinks.map((link, index) => <Link key={index} className="mb-1 pl-1 text-lg" to={"/" + link.toLowerCase().replace(/ /g, "-")}> {link} </Link>)}
                </div> }
            </nav>
    )
}


export default Header