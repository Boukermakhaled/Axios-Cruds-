import {CirclePlus} from 'lucide-react'
export default function Header(){
    return(
        <div className="header px-6 py-6 flex flex-col gap-4 justify-center items-center shadow-2xl rounded-2xl">
          <div className="titletime flex justify-between w-full">
            <h3 className="text-4xl font-extrabold">Products</h3>
            <p className="border rounded-xl  p-2">19:25 08/10/2025</p>

          </div>
          <hr className="w-full border-gray-300"/>
            <button className='flex gap-1.5 self-end bg-black text-white p-2 px-3 cursor-pointer rounded-xl'><CirclePlus /> Add product</button>
          
        </div>
    )
}