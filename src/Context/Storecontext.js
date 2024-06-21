import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const storecontext=createContext()

const StoreContextProvider=(props)=>{

    const [cartitems,setcartitems]=useState({})

    const addToCart=(itemID)=>{
        if(!cartitems[itemID]){
            setcartitems(prev=>({...prev,[itemID]:1}))
        }else{
            setcartitems(prev=>({...prev,[itemID]:prev[itemID]+1}))
        }
    }

    const RemoveFromCart=(itemID)=>{
            setcartitems(prev=>({...prev,[itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount=(()=>{
        let totalAmount=0;
        for(const item in cartitems){
            if(cartitems[item] > 0){
                let itemInfo=food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price* cartitems[item]
            }
            
        }
        return totalAmount;
    })

    const contextvalue={
        food_list,
        cartitems,
        setcartitems,
        addToCart,
        RemoveFromCart,
        getTotalCartAmount
    }

    return(
        <storecontext.Provider value={contextvalue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default StoreContextProvider;