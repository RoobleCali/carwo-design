import React, { useEffect, useState } from "react";
function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      {/* top */}
      <div className="flex items-center  justify-between bg-gray-300 dark:text-gray-500 p-3">
        <h1 className="text-center  leading-10   ">18 products </h1>
        <div className="flex items-center justify-center space-x-4">
          <select className="py-2 px-8">
            <option value="">Relevence</option>
            <option value="">Name (A - Z)</option>
          </select>
        </div>
      </div>
      {/* product cards */}
      <div className="flex items-center justify-center flex-wrap">
        {data.map((item) => (
          <div className="flex items-center  justify-between   p-5">
            <div
              className="flex flex-col items-center justify-center space-y-3 shadow-2xl
              h-96  w-80 cursor-pointer hover:drop-shadow-2xl transition-all duration-500"
            >
              <img src={item.image} alt="" className="w-52  h-60" />

              <div className="flex flex-col items-center justify-center flex-wrap px-3 space-y-6">
                <h1 className="text-gray-400"> {item.title}</h1>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Products;
