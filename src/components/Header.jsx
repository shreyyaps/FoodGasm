import { Link } from 'react-router-dom';
import {  useState } from "react";
import NameEmail from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Logo = () => {
    return (
        <img className="h-12 w-20" alt="foodGasm" src="/yoyo.png" />
    );
};

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const cartItems = useSelector((store)=> {return store.cart.items})

    //const {user, setUpdate} = useContext(NameEmail);

    return (
        <div className="bg-gray-900 shadow-lg">
            <div className="flex justify-between items-center px-6 py-4">
                <Logo />
                <nav>
                    <ul className="flex space-x-6 text-red-500 font-semibold">
                        <li>
                            <Link to="/" className=" transition duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className=" transition duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/insta" className=" transition duration-200">
                                InstaServices
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className=" transition duration-200">
                                Cart {cartItems.length} items
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
               
                    {isLoggedIn ? (
                        <button
                            className="bg-white text-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            className="bg-white text-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                            onClick={() => setIsLoggedIn(true)}
                        >
                            Log In
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
