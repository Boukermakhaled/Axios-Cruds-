import {CirclePlus} from 'lucide-react'
import { useState } from 'react'
import Add from './AddCard';
export default function Header(){
  const [showCard, setShow] = useState(false);
    return(
        <div className="header px-6 py-6 flex flex-col gap-4 justify-center items-center shadow-2xl rounded-2xl ">
          <div className="titletime flex justify-between w-full">
            <h3 className="text-2xl md:text-4xl font-extrabold">Products</h3>
            <p className="border rounded-xl p-1 flex items-center md:p-2 md:text-base text-xs" >19:25 08/10/2025</p>

          </div>
          <hr className="w-full border-gray-300"/>
            <button className='flex items-center gap-1.5 self-end bg-black text-xs md:text-base text-white py-1 md:py-2 px-2 md:px-3 cursor-pointer rounded-xl'
            onClick={()=>{setShow(true)}}
            ><CirclePlus size={18}/> Add product</button>
          <Add show={[showCard, setShow]}/>
        </div>
    )
}