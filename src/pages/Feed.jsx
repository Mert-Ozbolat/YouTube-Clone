import React, { useEffect, useState } from 'react'
import SideBar from "../components/SideBar"
import Card from "../components/Card"
import { useSearchParams } from 'react-router-dom'
import api from '../api'


const Feed = () => {

    const [videos, setIsVideos] = useState(null)
    const [loading, setIsLoading] = useState(true)
    const [error, setIsError] = useState(null)

    const selectedCat = searchParams.get("category")
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const url =
            !selectedCat ? "/home"
                : selectedCat === "trending"
                    ? "/trending"
                    : `/search?query=${selectedCat}`

        setIsLoading(true)

        api
            .get(url)
            .then((res) => console.log(res.data.data))
            .catch((err) => console.log(err.message))
            .finally(() => setIsLoading(false));
    }, [selectedCat])

    return (
        <div className='flex'>

            <SideBar selectedCat={selectedCat} />

            <div>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Feed