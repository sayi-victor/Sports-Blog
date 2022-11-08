import { Link } from "react-router-dom"

export const Page404 = () => {
    return (
        <main className="flex flex-col bg-gray-800 justify-center px-2 items-center min-h-screen">
            <div className="p-3 text-white flex flex-col">
                <h1 className="text-5xl mb-2">
                    Error 404: Page Not Found
                </h1>
                <p className="text-lg">
                    We are sorry but the page you are looking for is temporarily unavailable,
                    has been permanently deleted or simply does not exist. <br />
                    Please go back <Link className="underline" to="/"> Home </Link>
                    or
                    <Link className="underline" to="/contact-us"> Contact Us </Link>
                </p>
            </div>
        </main>
    )
}

export const Article404 = () => {
    return (
        <div className="p-3 text-white flex flex-col">
            <h1 className="text-3xl mb-2">
                Error 404: Article Not Found
            </h1>
            <p className="text-lg">
                We are sorry but the article you are looking may be temporarily unavailable,
                has been permanently deleted or simply does not exist. <br />
                Please go back <Link className="underline" to="/"> Home </Link>
                or <Link className="underline" to="/contact-us"> Contact Us </Link>
            </p>
        </div>
    )
}