

import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


function filterList(searchText, restaurents) {

    return restaurents.filter((restaurent) => {
        return restaurent.info.name.toLowerCase().includes(searchText.toLowerCase())
    })


}


export default function Body() {
    const [searchText, setSearchText] = useState("")
    const [restaurents, setRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);

    useEffect(() => {
        getRestaurents()
    }, [])


    async function getRestaurents() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurents(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurents(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const isOnline = useOnline();
    if (!isOnline) return (<div>
        <h1>you are offline check yur internet connection!!!!!!</h1>
    </div>)
    return (restaurents.length === 0) ? (
        <>
            <Shimmer />
        </>
    ) : (
        <>
            <div className="flex justify-center my-6">
                <div className="flex w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
                    <input
                        className="w-full py-3 px-4 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="bg-red-500 text-white px-6 py-3 text-lg font-semibold rounded-r-lg hover:bg-red-600 transition duration-300"
                        onClick={() => {
                            const data = filterList(searchText, restaurents);
                            setFilteredRestaurents(data);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            {
                (filteredRestaurents.length === 0) ? (<div>
                    <h1>no item match</h1>
                </div>) : (<div className="card-container grid grid-cols-5 gap-10 justify-center p-10 bg-gray-900">
                    {filteredRestaurents.map((restaurent) => (
                        <Link to={"/restaurent/" + restaurent.info.id} key={restaurent.info.id}>
                            <RestaurentCard props={restaurent} />
                        </Link>
                    ))}
                </div>
                )
            }
        </>
    );
}