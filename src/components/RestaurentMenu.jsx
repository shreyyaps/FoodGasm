
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { IMAGE_ID } from "../utils/helper";
import useRestaurent from "../utils/useRestaurent";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";


const RestaurentMenu = () => {

    const { id } = useParams();
    const menu = useRestaurent(id);

    const dispatch = useDispatch();

    const addCart = (item) =>{
        dispatch(addItems(item))
    }

    return !menu ? (<Shimmer />) : (
        <div className="flex">

            <div>
                <h1>restaurant id - {id} </h1>
                <h2>Name of the restaurant -  {menu?.cards?.[2]?.card?.card?.info?.name}</h2>
                <h3>Locality - {menu?.cards?.[2]?.card?.card?.info?.locality}</h3>
                <img src={IMAGE_ID + menu?.cards?.[2]?.card?.card?.info?.cloudinaryImageId} alt="restaurant" />

            </div>
            <div className="flex" >
                <h1>Menu</h1>
                <ul>
                    {menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((item) => (
                        <li className="p-3 m-3 " key={item?.card?.card?.title}>{item?.card?.card?.title}
                        <button className="bg-white text-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        onClick={()=>addCart(item)}
                         >add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurentMenu;