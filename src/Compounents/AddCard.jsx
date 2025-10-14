import { useState, useEffect } from "react";
import { Upload, File } from "lucide-react";
export default function Add({show}){
    const [showCard, setShow] = show;
    const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        if (showCard) {
          setTimeout(() => setVisible(true), 10);
        } else {
          setVisible(false);
        }
      }, [showCard]);
       const [file, setFile] = useState(null);
       const [isDragging, setIsDragging] = useState(false);

       const handleFile = (e) => {
         e.preventDefault();
         setIsDragging(false);

         const uploadedFile = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
         if (uploadedFile) {
           setFile(uploadedFile);
         }
       };
    return(
        <div
      className={`fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-[100] transition-opacity duration-300 ${
        showCard ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => {
        setShow(false);
      }}
    >
      <div
        className={`bg-white/85 border w-2xs md:w-md border-gray-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-5 items-center transform transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
      className={`border-2 border-dashed rounded-2xl p-6 w-full max-w-md text-center transition-all duration-300 ${
        isDragging
          ? "border-sky-300 bg-blue-50"
          : "border-gray-300 bg-gray-50 hover:border-sky-400"
      }`}
      onDrop={handleFile}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
    >
      {!file ? (
        <>
          <Upload size={48} className="mx-auto text-sky-400 mb-2" />
          <p className="text-gray-600 mb-2">
           drage a product image
          </p>
          <label
            htmlFor="fileInput"
            className="cursor-pointer text-sky-500 font-semibold hover:underline"
          >
           choose a product image
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFile}
          />
        </>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <File size={40} className="text-green-500" />
          <p className="text-gray-700 font-medium">{file.name}</p>
          <button
            className="mt-2 px-4 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setFile(null)}
          >
            إزالة الملف
          </button>
        </div>
      )}
    </div>
    <form action="" className="w-full grid grid-cols-3 self-start gap-4">
      <input type="text" placeholder="product name" className="border-gray-200 border rounded-2xl p-2 col-start-1 col-end-3"/>
      <input type="number" name="price" id="" placeholder="price $" className="border border-gray-200 rounded-2xl p-2" />
    </form>
        </div>
        </div>
    )
}