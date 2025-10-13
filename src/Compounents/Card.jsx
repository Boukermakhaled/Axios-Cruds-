import { StarHalf, PackageSearch, BadgeDollarSign, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

export default function Card({ show, info }) {
  const [showCard, setShow] = show;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showCard) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [showCard]);

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
        <img src={info.image} alt="" className="w-23 md:w-36" />
        <div className="content flex flex-col gap-3 mt-4 self-start">
          <div className="title text-center">
            <h3 className="font-semibold text-lg text-left">{info?.title}</h3>
          </div>
          <div className="rating flex gap-5 w-full">
            <div className="pieces flex items-center gap-1 text-gray-700">
              <PackageSearch size={18} />
              <h3>{info.rating?.count}</h3>
            </div>
            <div className="rating text-amber-400 flex items-center gap-1">
              <StarHalf size={20} />
              <h3>{info.rating?.rate ?? "N/A"}</h3>
            </div>
          </div>
          <div className="tags self-start">
            <p className="tag  bg-sky-300/20 rounded-2xl p-1 px-2 text-shadow-lg/50 text-shadow-sky-200 text-sky-600">{info?.category}</p>
          </div>
          <div className="price">
            <p className="flex ml-1.5 gap-1 text-bgreen text-shadow-md text-shadow-bgreen/20">{info.price}<BadgeDollarSign /></p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
