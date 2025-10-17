import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Del({show , data}){
      const [showCard, setShow] = show;
     const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        if (showCard) {
          setTimeout(() => setVisible(true), 10);
        } else {
          setVisible(false);
        }
      }, [showCard]);
      console.log(data.id)
      const hundeleDel = async (e)=>{
        e.preventDefault()
        try{
        const res = await axios.delete(`https://fakestoreapi.com/products/${data.id}`);
        toast.success("✅ Product deleted successfully!");
        console.log("Response:", res.data);

      }catch (err) {
           console.error("Upload error:", err.response ? err.response.data : err.message);
          toast.error("Error adding product!");
          }
    }
      return (
        <div
          className={`fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-[100] transition-opacity duration-300 ${
            showCard ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setShow(false);
          }}
        >
          <div
            className={`bg-white/85 border w-2xs md:w-md border-gray-200 rounded-3xl p-6 shadow-2xl flex flex-col items-center transform transition-all duration-300 ${
              visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className=" text-red-500 text-shadow-lg text-shadow-red-400/20"> Are you sure you want to delete this product? </h1>
         <img src={data?.image} alt="" className="mt-4 w-17"/>
        <h3 className="mt-4 font-semibold text-md text-left">{data?.title}</h3>
            <div className="buttons mt-4 flex gap-2 ">
                <button className="cursor-pointer bg-green-400/30 px-2 py-1 rounded-2xl text-green-600" onClick={hundeleDel}>Confirm</button>
                <button className="cursor-pointer bg-red-400/30 px-2 py-1 rounded-2xl text-red-600" onClick={()=>{setShow(false)}}>Cancel</button>
            </div>
            </div>
            </div>
        
    )
}