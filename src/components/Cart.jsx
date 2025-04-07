
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () =>{
         const dispatch = useDispatch()
        const clear = () =>{
            dispatch(clearCart())
        }

    const cartItems = useSelector((store)=> {return store.cart.items})
    return(
        <>
           {cartItems.map((item)=>{
            return <h1 key={item?.card?.card?.title}>{item?.card?.card?.title}</h1>
           })}

           <div>
            <button className="bg-white text-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            onClick={()=> clear()}
             >clearCart</button>
           </div>
        </>
    )
}

export default Cart;