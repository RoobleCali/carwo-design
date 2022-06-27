import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex  items-center justify-between bg-gray-300 p-3">
        <h1>18 products</h1>
        <div>
          <select className="py-2 px-8">
            <option>Reelevnce</option>
            <option>name (A-z)</option>
          </select>
        </div>
      </div>
      {/* products card */}
      <div className="flex items-center justify-center flex-wrap">
        {data.map((item) => (
          <div className="flex items-center justify-between p-5">
            <div
              className="flex flex-col items-center justify-center space-y-3 shadow-2xl h-96 w-80 cursor-pointer hover:drop-shadow-2xl transition-all
          duration-500"
            >
              <img src={item.image} alt="" className="h-60 w-52" />
              <div className="flex flex-col items-center justify-center flex-wrap px-3 space-y-6">
                <h1 className="text-gray-400">{item.title}</h1>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
