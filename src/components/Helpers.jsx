import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const api = "/src/assets/newsItems.json";

export const TimeElapsed = () => {
    let mins = Math.floor(Math.random() * 60)

    if (mins === 0) {
        mins = "Just Now"
    } else if ( mins === 1) {
        mins = "1 min ago"
    } else {
        mins = mins + " mins ago"
    }
    return (
        <span className='text-sm'>
            <FontAwesomeIcon className="text-gray-500 mr-1" icon={faClock} />
            <span className="text-gray-200"> {mins} </span>
        </span>
    )
}

export const randomNums = (largestNum, totalNums = 10) => {
    const keys = []

    const addNumToKeys = (num) => {
        if (!keys.includes(num)) {
            keys.push(num)
        }
    }

    const generateRandomNum = (max) => {
        const num = Math.floor(Math.random() * max);
        return num;
    }

    while (keys.length < totalNums) {
        addNumToKeys(generateRandomNum(largestNum))
    }

    return keys
}