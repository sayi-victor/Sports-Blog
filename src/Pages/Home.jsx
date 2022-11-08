import MainLayout from "../components/Layouts/MainLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { randomNums, TimeElapsed, api } from "../components/Helpers"

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(api).then(
            (data) => (data.json())).then(
                (items)=> {
                    if (items.length != 0) {
                        const keys = randomNums(items.length, 12)
                        const newsItems = []

                        for (let key = 0; key < keys.length; key++) {
                            newsItems.push(items[keys[key]])
                        }
                        setItems(newsItems)
                    }
                } )
    }, []);

    return (
        <MainLayout>
            <div className=" px-2 md:grid md:grid-cols-3 flex-1 pb-2 lg:grid-cols-4 gap-3 bg-gray-800">
                {items.map((data, index) => {
                    const categoryUrl = data.category.toLocaleLowerCase().replace(/ /g, "-")
                    const articleUrl = categoryUrl + "/" + data.published_at_date + "/" + data.title.toLocaleLowerCase().replace(/ /g, "-")

                    return (
                        <div key={index} className='bg-gray-800 border-y md:border md:rounded-md border-gray-700 text-white flex flex-row justify-between md:flex-col-reverse my-3'>
                            <div className="basis-2/3 p-2 flex flex-col">
                                <Link to={categoryUrl} className="text-center flex flex-row w-max text-sm border border-gray-700 p-1"> {data.category} </Link>
                                <Link to={articleUrl} className="text-xl font-medium">
                                    {data.title}
                                </Link>
                                <TimeElapsed />
                            </div>
                            <div className="basis-1/3">
                                <img src={data.image} alt="Image" className="lg:max-w-full w-fit md:max-w-full md:max-h-[150px] lg:max-h-[200px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </MainLayout>
    )
}

export default Home;