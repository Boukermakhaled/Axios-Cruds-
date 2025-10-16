import { useState, useEffect } from "react";
import { Upload, File } from "lucide-react";
import axios from "axios";

export default function Add({ show }) {
  const [showCard, setShow] = show;
  const [visible, setVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    count: "",
  });

  useEffect(() => {
    if (showCard) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [showCard]);

  const handleFile = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const uploadedFile = e.target.files
      ? e.target.files[0]
      : e.dataTransfer.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.price || !data.category || !file) {
      alert("Please fill all fields and choose an image!");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("id", 0);
      formData.append("title", data.name);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("count", data.count);
      formData.append("image", file);

      const res = await axios.post("https://fakestoreapi.com/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", res.data);
      alert("Product added successfully!");
      setShow(false);
      setData({ id: "", name: "", price: "", category: "", count: "" });
      setFile(null);
    } catch (err) {
  console.error("Upload error:", err.response ? err.response.data : err.message);
  alert("Error adding product!");
}
 finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-[100] transition-opacity duration-300 ${
        showCard ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShow(false)}
    >
      <div
        className={`bg-white/85 border w-2xs md:w-md border-gray-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-5 items-center transform transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Upload Section */}
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
              <p className="text-gray-600 mb-2">Drag a product image</p>
              <label
                htmlFor="fileInput"
                className="cursor-pointer text-sky-500 font-semibold hover:underline"
              >
                Choose a product image
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
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-3 gap-2">
          <input
            type="text"
            placeholder="Product name"
            className="input col-start-1 col-end-3"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price $"
            className="input p-2"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            className="input col-start-1 col-end-3"
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          />
          <input
            type="number"
            placeholder="Count"
            className="input p-2"
            value={data.count}
            onChange={(e) => setData({ ...data, count: e.target.value })}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-sky-400/20 text-sky-400 hover:bg-sky-400/30 transform duration-300 rounded-2xl p-1.5 col-start-2 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
