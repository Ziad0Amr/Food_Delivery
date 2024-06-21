import React, { useContext } from 'react'
import "./fooditem.css"
import { assets } from '../../assets/assets'
import { storecontext } from '../../Context/Storecontext';

const Fooditem = (props) => {
    const {cartitems,addToCart,RemoveFromCart}=useContext(storecontext)
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-img' src={props.item.image} alt={props.item.name}/>
                {
                    !cartitems[props.item._id]
                    ?<img className='add' onClick={()=>addToCart(props.item._id)} src={assets.add_icon_white} alt='white_icon'/>
                    :<div className='food-item-counter'>
                        <img onClick={()=>RemoveFromCart(props.item._id)} src={assets.remove_icon_red} alt='remove_icon'/>
                        <p>{cartitems[props.item._id]}</p>
                        <img onClick={()=>addToCart(props.item._id)} src={assets.add_icon_green} alt='add_icon'/>
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{props.item.name}</p>
                    <img src={assets.rating_starts} alt='startsicon'/>
                </div>
                <p className='food-item-decription'>{props.item.description}</p>
                <p className='food-item-price'>${props.item.price}</p>
            </div>
        </div>
    )
}

export default Fooditem