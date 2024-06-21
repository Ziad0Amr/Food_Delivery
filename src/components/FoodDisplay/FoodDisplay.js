import React, { useContext } from 'react'
import "./fooddisplay.css"
import { storecontext } from '../../Context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(storecontext)
    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {
                    food_list.map((item,index) => {
                        if(category==="All" || category===item.category){
                            return <Fooditem key={index} item={item} />
                        }
                    }
                )}
            </div>
        </div>
    )
}

export default FoodDisplay