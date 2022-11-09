import Header from "../Header";
import Footer from "../Footer";
import { Footer } from "../footer";
import { LeagueTables } from "../LeagueTables";

const MainLayout = ({children}) => {

    return (
        <main className="flex bg-gray-800 flex-col h-full">
            <Header />
            <div className="flex justify-between flex-col lg:flex-row pt-10">
                <div className="basis-[70%] min-h-screen flex flex-col overflow-y-auto">
                    {children}
                    <Footer />
                </div>
                <div className="hidden overflow-y-auto fixed left-[72%] h-full text-white border border-gray-700 lg:grid">
                    <LeagueTables />
                </div>
            </div>
        </main>
    )
}

export default MainLayout;
