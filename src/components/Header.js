import Image from "next/image"
import {MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
import { useState } from "react"
import { search } from "node-emoji"
import { includes } from "lodash"
import {signIn,signOut,useSession} from "next-auth/client"
import {useRouter} from 'next/router'
import { selectItems } from "../slices/basketSlice"
import {useSelector} from 'react-redux'
function Header({products}) {
    const [input, setInput] = useState("")
    const [session]=useSession();
    const router=useRouter()
    const items=useSelector(selectItems)
    // console.log(input)
    // search=()=>{
    //     document.getElementById("input").classList.toggle("block");
    // }
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        onClick={()=>router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                    />
                </div>
                <div className="hidden sm:flex items-center h-10 flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                    <input id="input" value={input}  onChange={e=>{setInput(e.target.value)}} className="h-10 flex-grow w-6 flex-shrink rounded-l-md p-2 focus:outline-none px-4" type="text"/>
                        { input===""?<div></div>:(<div className=" absolute top-12 flex-col sm:flex sm:w-1/4 flex-grow lg:w-2/4 flex-shrink md:w-2/6"> {products.filter(
                            p=> {
                                if(input===""){
                                    return p;
                                }
                                else if(p.title.toLowerCase().includes(input.toLowerCase())){
                                    return p;
                                }
                            }
                        ).map(p=><div className="shadow-lg cursor-pointer rounded-md flex-grow z-40 bg-white border-b p-2 px-6 ">{p.title}</div>)}</div>)}
                    <button  className="focus: outline-none " type="submit"><SearchIcon className="h-12 p-4"/></button>
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div  onClick={signIn} className="link  items-center">
                        {session?<p className="hover:underline">Hello, {session.user.name}</p>:<p className="hover:underline">Sign In</p>}
                        
                        <p className="font-extrabold md:text-sm hover:underline">Accounts &  Lists</p>
                    </div>
                    <div className="link hover:underline">
                        <p className="md:text-sm">Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={()=>router.push('/checkout')} className="link  hover:underline relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black bg-yellow-500">{items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                    </div>

                </div>
            </div>
            <div className="flex bg-amazon_blue-light text-white text-sm items-center p-1 text-center space-x-4 pl-6">
                <p className="link flex items-center border border-transparent hover:border-white p-1 rounded-sm">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link border border-transparent hover:border-white p-1 rounded-sm">Prime Video
                </p>
                <p className="link border border-transparent hover:border-white p-1 rounded-sm">
                    Amazon Business
                </p>
                <p className="link border border-transparent hover:border-white p-1 rounded-sm">
                    Today's Deal
                </p>
                <p className="hidden lg:inline-flex link border border-transparent hover:border-white p-1 rounded-sm">
                    Electronics
                </p>
                <p className="link hidden lg:inline-flex border border-transparent hover:border-white p-1 rounded-sm"> Food & Grocerry</p>
                <p className="link hidden lg:inline-flex border border-transparent hover:border-white p-1 rounded-sm">Prime</p>
                <p className="link hidden lg:inline-flex border border-transparent hover:border-white p-1 rounded-sm">Amazon Pay</p>
                <p className="link hidden lg:inline-flex border border-transparent hover:border-white p-1 rounded-sm">Shopper Toolit</p>
                <p className="link hidden lg:inline-flex border border-transparent hover:border-white p-1 rounded-sm">Health & Personal Care</p>
                <p className="link hidden lg:inline-flex border border-transparent hover:border-white p-1 rounded-sm">Special Deals for you</p>

            </div>
        </header>
    )
}

export default Header
    