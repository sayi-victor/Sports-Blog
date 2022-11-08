import MainLayout from "../components/Layouts/MainLayout";
import { Link } from "react-router-dom";
import { TimeElapsed, api } from "../components/Helpers";
import { useEffect, useState } from "react";

const BreakingNews = () => {
    const [articles, setArticles] = useState([]);
    const category = "Breaking news";

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
                <h1 className='text-2xl text-white px-2 py-1 font-semi-bold '> Breaking News </h1>
                <div className="md:grid md:grid-cols-3 pb-2 lg:grid-cols-4 gap-3">
                    {articles.map((data, index) => {
                        const title = data.title.replace(/ /gi, "-").toLowerCase()
                        const date = data.published_at_date.replace(/\//g, "-")
                        const url = date + "/" + title

                        return (
                            <div key={index} className='bg-gray-800 border-y md:border md:rounded-md border-gray-700 text-white flex flex-row justify-between md:flex-col-reverse my-3'>
                                <div className="basis-2/3 p-2 flex flex-col">
                                    <span className="text-center flex flex-row w-max text-sm border border-gray-700 p-1"> {data.league} </span>
                                    <Link to={url} className="text-xl font-medium">
                                        {data.title}
                                    </Link>
                                    <TimeElapsed />
                                </div>
                                <div className="basis-1/3">
                                    <img src={data.image} alt="Image" className="lg:max-w-full w-fit md:max-w-full md:max-h-[150px] lg:max-h-[200px]" />
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </MainLayout>
    )
}

export default BreakingNews