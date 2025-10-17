import { use, useEffect, useState } from "react"
import axios from "axios"
//icon
import {Eye, Pencil, Trash} from 'lucide-react'
import Card from "./Card";
import Add from "./AddCard";
import Del from "./Delete";
export default function Table(){
    const [products, setproducts] = useState([]);
    const [showCard, seetShow] = useState(false);
    const [Cardinfo, setCard] = useState({});
    const [edit, setEdit] = useState(false)
    const [del, setDelete] = useState(false);
    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    
      setproducts(response.data);
     console.log(products);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    },[]);
    const list = products.map((pr)=>{
        
        return <tr key={pr.id} className="p-4  text-xs">
            <td className=" flex justify-center px-2"><img src={pr.image} alt="" className="w-6 md:w-9"/></td>
            <td className="max-w-20 md:max-w-3xs lg:max-w-2xs overflow-hidden whitespace-nowrap text-ellipsis truncate">{pr.title}</td>
            <td className="hidden md:table-cell">{pr.price}</td>
            <td>{pr.category}</td>
            <td>{pr.rating.count}</td>
            <td>
                <div  className="flex justify-center gap-1.5 md:gap-2 px-2">
                <button 
                className="cursor-pointer self-start flex gap-0.5 items-center 
                 md:bg-blightblue/20 rounded-2xl  md:py-1.5 text-sky-500
                  shadow-sky-200 md:shadow-md/30 md:px-3.5" 
                  onClick={()=>{
                         seetShow(true);
                         setCard(pr);
                        }}
            ><Eye size={16}/></button>
            <button
             className=" cursor-pointer flex gap-0.5 items-center  md:bg-bpurple/20 
             rounded-2xl  md:py-1.5 text-purple-500 shadow-purple-200
              md:shadow-md/30 md:px-3.5" onClick={()=> {
                setEdit(true)
                setCard(pr)
              }}><Pencil size={16}/></button>
            <button
             className=" cursor-pointer flex gap-0.5 items-center  md:bg-red-600/20 
             rounded-2xl md:py-1.5 text-red-500 shadow-red-200
              md:shadow-md/30 md:px-3.5" onClick={()=> {
                setDelete(true)
                setCard(pr)
              }}><Trash size={16}/></button>
            </div>
            </td>
            
        </tr>
    })
    return(
        <section className="relative shadow-2xl rounded-2xl">
            <Add show={[edit, setEdit]} type={'edit'} proddata={Cardinfo}/>
            <Del show={[del, setDelete]} data={Cardinfo}/>
            <table className="border-separate border-spacing-y-4 w-full rounded-2xl">
                <thead  className="bg-light-white w-full text-xs">
                    <tr >
                    <th className=" md:p-2">Image</th>
                    <th className="p-2 md:p-4">Title</th>
                    <th className="hidden md:inline-table">price</th>
                    <th>category</th>
                    <th>Count</th>
                    <th>Action</th>
                    
                    </tr>
                    
                </thead>
                <tbody className="">
                    {list}
                    
                </tbody>
            </table>
             <Card show={[showCard,seetShow]} info={Cardinfo}/>
        </section>
    )
}