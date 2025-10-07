import {EllipsisVertical} from 'lucide-react'
export default function SideBar(){
    return(
        <div className="side">
            <div className="profile bg-light-white p-4 w-fit rounded-2xl">
                <div className="informations flex gap-5">
                    <img src="photos/Abderrahmane.jpg" alt="" className="w-14 rounded-full" />
                    <div className="info">
                        <h3 className="font-bold">Abderrahmane Dev</h3>
                        <h3 className="text-gray-400">Front end developer</h3>
                    </div>
                    <EllipsisVertical />
                </div>
            </div>
        </div>
    )
}