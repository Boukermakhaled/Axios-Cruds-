import {EllipsisVertical, ShoppingCart} from 'lucide-react'
import { NavLink } from 'react-router-dom'
export default function SideBar(){
    return(
        <div className="side flex flex-col gap-20  px-3 py-6 shadow-2xl rounded-2xl h-screen">
            <div className="profile bg-light-white p-2  border border-gray-300 rounded-2xl">
                <div className="informations flex gap-3 lg:gap-5 justify-center items-center">
                    <img src="photos/Abderrahmane.jpg" alt="" className="w-12 rounded-full shadow-xs" />
                    <div className="info text-xs w-full lg:text-sm text-left ">
                        <h3 className="font-bold">Abderrahmane Dev</h3>
                        <h3 className="text-gray-400">Front end developer</h3>
                    </div>
                    <EllipsisVertical size={40}/>
                </div>
            </div>

             <div className="navigation">
                   <NavLink to={'/'}className={'flex gap-3 bg-light-white border border-gray-300 rounded-2xl p-3 w-full'}><ShoppingCart /> products</NavLink>
                </div>
        </div>
    )
}