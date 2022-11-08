import MainLayout from "../components/Layouts/MainLayout";
import { Link } from "react-router-dom";
import { api, TimeElapsed } from "../components/Helpers";
import { useState, useEffect } from "react";

const LatestNews = () => {
    const [articles, setArticles] = useState([]);
    const category = "Latest news";

    useEffect(() => {
        fetch(api).then(
            (response) => (response.json())
                ).then(
                    (items) => {
                        const filteredItems = items.filter((item) => (item.category.toLocaleLowerCase() === category.toLocaleLowerCase()))
                        setArticles(filteredItems)
                    })
        }, []);

    return (
        <MainLayout>
            <div className="flex-1">
                <h1 className='text-2xl text-white px-2 py-1 font-semi-bold '> Latest News </h1>
                <div className=" md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {articles.map((data, index) => {
                        const title = data.title.replace(/ /gi, "-").toLowerCase()
                        const date = data.published_at_date.replace(/\//g, "-")
                        const url = date + "/" + title

                        return (
                            <div key={index} className='bg-gray-800 border-y md:border md:rounded-md border-gray-700 text-white flex flex-row justify-between md:flex-col-reverse my-3'>
                                <div className="p-2 basis-2/3 flex flex-col ">
                                    <span className="text-center flex flex-row w-max text-sm border border-gray-700 text-gray-200 p-1"> {data.league}</span>
                                    <Link to={url} className="text-xl my-1 font-medium">
                                        {data.title}
                                    </Link>
                                    <TimeElapsed />
                                </div>
                                <div className="basis-1/3">
                                    <img src={data.image} className="lg:max-w-full w-fit md:max-w-full md:max-h-[150px] lg:max-h-[200px]" alt="image" />
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </MainLayout>
    )
}

export default LatestNews