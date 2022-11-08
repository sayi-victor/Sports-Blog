import { Link } from "react-router-dom";

const Footer = () => {
    const links = ['Home', 'Contact us', 'Terms of Service', 'Privacy Policy', 'Careers', 'Livescores']

    return (
        <div className="shrink-0 w-full bg-gray-900 border-t border-t-gray-500 text-white flex flex-col flex-wrap justify-evenly p-2">
            <div className="font-bold text-center text-xl mb-1"> MyBlog </div>
            <nav className="text-white flex flex-row flex-wrap justify-center">
                {links.map((link, index) => <Link key={index} className="border-r mr-1 p-1 last-of-type:border-r-0 border-r-gray-500 w text-center"> {link} </Link> )}
            </nav>
            <div className="text-sm text-center mt-1">
                Copyright &copy; 2022 MyBlog All Rights reserved.
            </div>
        </div>
    )
}

export default Footer;