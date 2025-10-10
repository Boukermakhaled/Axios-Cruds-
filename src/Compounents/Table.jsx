import { useEffect, useState } from "react"
import axios from "axios"
export default function Table(){
    const [products, setproducts] = useState([]);
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
        return <tr  className="p-4 text-left text-xs ">
            <td className="w-fit flex justify-center px-2"><img src={pr.image} alt="" className="w-7"/></td>
            <td className="max-w-3xs">{pr.title}</td>
            <td>{pr.price}</td>
            <td>{pr.category}</td>
            <td>{pr.rating.count}</td>
            
        </tr>
    })
    return(
        <section className=" shadow-2xl rounded-2xl">
            <table className="border-separate border-spacing-4 w-full rounded-2xl">
                <thead  className="bg-light-white w-full ">
                    <tr >
                    <th className="p-2">Image</th>
                    <th className="p-4">Title</th>
                    <th>price</th>
                    <th>category</th>
                    <th>Count</th>
                    <th>view</th>
                    <th>Modification</th>
                    </tr>
                    
                </thead>
                <tbody className="">
                    {list}
                    
                </tbody>
            </table>

        </section>
    )
}