import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slices/basketSlice'
function CheckoutProduct({id,title,price,description,category,image,rating,hasPrime}) {
    const dispatch= useDispatch()
    console.log(id)
    const removeItem=()=>{
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5 gap-4 border-b-2 p-10">
            <Image className="p-20" src={image} height={40} width={40} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <h4>{title}</h4>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=>(
                    <StarIcon className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-sm my-2 line-clamp-3">
                   {description}
                </p>
                <Currency quantity={price} currency="INR"/>
                {hasPrime &&
                    <div className="flex items-center space-x-2 mt-1">
                        <img className="w-12 " src="https://links.papareact.com/fdw" />
                        <p className="text-xs text-gray-500">Free Delivery</p>
                    </div>
                }

            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button">Add to Orders</button>
                <button onClick={removeItem} className="button">Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
