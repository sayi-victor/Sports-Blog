import MainLayout from "../components/Layouts/MainLayout"
import { useParams } from "react-router-dom"
import { Article404 } from "./E404"
import { TimeElapsed, api } from "../components/Helpers"
import { RelatedNews } from "../components/RelatedNews"
import { useState, useEffect } from "react"

const Article = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(api).then(
            (data) => (data.json())).then(
                (items)=> {
                    setItems(items)
                })

        
    }, []);

    const searchParams = useParams()
    const urlPublishDate = searchParams.date
    const urlArticleTitle = searchParams.title.replace(/-/g, " ")
    let articleIndex = false

    if (items.length != 0){
       const checkDate = items.find(article => article.published_at_date === urlPublishDate)

       if (checkDate) {
            const index = items.findIndex(article => article.title.toLocaleLowerCase() === urlArticleTitle)

            if (index >= 0) {
                articleIndex = index
                window.scroll(0,0)
            } else {
                articleIndex = false
            }
        } else {
            articleIndex = false
       }
    }

    const Output = (props) => {
        const outcome = props.outcome

        if (outcome === false) {
            return <Article404 />
        } else {
            return (
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div className="md:col-span-2 self-start p-2 my-2 border-b md:border border-gray-700 md:rounded-lg">
                        <h1 className="text-2xl font-medium first-letter:uppercase">
                            {items[articleIndex].title}
                        </h1>
                        <TimeElapsed />
                        <img src={items[articleIndex].image} className="max-h-[400px] mt-1 rounded" alt={items[articleIndex].image} />
                        <ul className="my-2 flex flex-row justify-start">
                            {items[articleIndex].tags.map((data, index) => {
                                return <li key={index} className="border border-gray-600 rounded mr-4 p-1"> { data} </li>
                            })}
                        </ul>
                        <p className="text-lg">
                            {items[articleIndex].body}
                        </p>
                    </div>
                    <RelatedNews items={items} category={items[articleIndex].category} index={articleIndex} />
                </div>
            )
        }
    }

    return (
        <MainLayout>
            <div className="text-white">
                <Output outcome={articleIndex} />
            </div>
        </MainLayout>
    )
}

export default Article