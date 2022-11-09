import { Link } from "react-router-dom"
import { TimeElapsed, randomNums } from "./Helpers"

export const RelatedNews = (props) => {
    const items = props.items
    const category =  props.category
    const index = props.index
    const relatives = items.filter((item, key) => (item.category.toLocaleLowerCase() === category.toLocaleLowerCase() && key != index))
    const keys = randomNums(relatives.length, 3)
    const someRelatives = []

    for (let x = 0; x < keys.length; x++) {
        someRelatives.push(relatives[keys[x]])
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl m-2"> Related News </h1>
            <div className="flex-1 flex flex-row flex-wrap  items-start">
            {someRelatives.map((data, index) => {
                 const categoryUrl = data.category.toLocaleLowerCase().replace(/ /g, "-")
                 const articleUrl = categoryUrl + "/" + data.published_at_date + "/" + data.title.toLocaleLowerCase().replace(/ /g, "-")
                return (
                    <div key={index} className='bg-gray-800 self-start basis-full border-t-0 border-y last-of-type:border-y-0 md:border md:rounded-md border-gray-700 text-white flex flex-row justify-between md:flex-col-reverse my-3'>
                    <div className="basis-2/3 p-2 flex flex-col">
                        <Link to={"/"+ categoryUrl} className="text-center flex flex-row w-max text-sm border border-gray-700 p-1"> {data.category} </Link>
                        <Link to={"/"+ articleUrl} className="text-xl font-medium">
                            {data.title}
                        </Link>
                        <TimeElapsed />
                    </div>
                    <div className="basis-1/3">
                        <img src={data.image} alt="Image" className="hidden md:block max-h-[200px]" />
                    </div>
                </div>
                )
            })}
        </div>
        </div>
    )
}
