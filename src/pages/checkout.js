import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import {useSelector} from 'react-redux'
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter'
import { session, useSession } from "next-auth/client";

function Checkout() {
    const items=useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [session]=useSession()
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-screen-xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain" />
                        <div className="flex flex-col space-y-10 bg-white p-5">
                            <h1 className="text-3xl border-b pb-4">
                                {items.length===0?"Your Basket is Empty":"Your Shopping Basket"}</h1>
                            <div>{items.map((item,i) => <CheckoutProduct key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} rating={item.rating} hasPrime={item.hasPrime}  />)}</div>    
                        </div>
                        
                </div>
                <div  className="flex flex-col bg-white p-10 shadow-md">
                            <h2 className="whitespace-nowrap">{items.length>0 && `Subtotal (${items.length} items) :  `}
                            <span className="font-bold">
                                <Currency quantity={total} currency="INR" /> 
                            </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && "from-gray-400 to-gray-600  border-gray-600 focus:ring-gray-500 active:ring-1 active:from-gray-800 text-white cursor-not-allowed "}`}> {!session?"Sign In to proceed":"Buy Now" }</button>
                        </div>
            </main>
        </div>
    )
}

export default Checkout
