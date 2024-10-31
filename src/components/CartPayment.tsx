import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";
import { SiMediafire } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";

const CartPayment =() =>{
    const {productData,userInfo} = useSelector((state:stateProps)=> state.next);
    const[totalAmount, setTotalAmount] = useState(0);

    useEffect (() => {
        let amount=0;
        productData.map((item:StoreProduct)=>{
            amount+= item.price * 10 * item.quantity;
            return

        })
        setTotalAmount(amount)
    },[productData])
    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm
                 text-white flex items-center justify-center mt-1">
                    <SiMediafire/>
                </span>
                <p className="text-sm">Your order is eligible for FREE delivery. Continue for more details</p>
            </div>
            <p className="flex items-center justify-between px-2 font-semibold">
                Total Price: {" "}
                <span className="font-bold text-xl">
                    <FormattedPrice amount={totalAmount} />
                </span>
            </p>
            {
                userInfo?(
                    <div className="flex flex-col items-center">
                        <button className="w-full h-10 text-sm font-semibold bg-amazon_yellow text-black rounded-lg hover:bg bg-amazon_blue hover:text-white duration-300">
                            Proceed to Checkout
                        </button>
                    </div>
                ):(
                <div className="flex flex-col items-center">
                <button className="w-full h-10 text-sm font-semibold bg-amazon_yellow text-white rounded-lg cursor-not-allowed">Proceed to CheckOut</button>
                <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">Please Login to Continue</p>
            </div>
                )
            }
        </div>
    );
}

export default CartPayment;