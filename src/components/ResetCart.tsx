import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetCart = () =>{
    const dispatch = useDispatch();
    const handleResetCart = () =>{
        const confirmReset = window.confirm(
            "Are you sure you want delete all products in cart?"
        );
        if (confirmReset){
        dispatch(resetCart());
        }
}
    return(
        <button 
        onClick = {handleResetCart} className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
            resetCart
        </button>
    );
}

export default ResetCart;