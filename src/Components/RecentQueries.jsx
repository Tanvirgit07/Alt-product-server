import { useEffect, useState } from "react";

const RecentQueries = () => {
  const [aProduct, setAProduct] = useState([]);
  console.log(aProduct);
  useEffect(() => {
    fetch("https://alternative-product-information-server-iota.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        const sortData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        if (sortData.length > 6) {
          const limitedData = sortData.slice(0, 6);
          setAProduct(limitedData);
        } else {
          setAProduct(sortData);
        }
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-purple-700 mb-10">This is recent queries</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-11/12 lg:w-full mx-auto">
        {aProduct.map((recentProduct) => (
          <div
            key={recentProduct._id}
            className="card card-compact bg-base-100 shadow-2xl border-solid border-2 border-indigo-600"
          >
            <figure className="bg-white-300 py-5 w-96">
              <img
                src={recentProduct.productURL}
                alt="Shoes"
                className="w-4/5 h-72 mx-auto"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 rounded-full">
                    <img src={recentProduct.photoURL}
                    className="rounded-full"
                     alt="" />
                </div>
                <h2 className="card-title">{recentProduct.name}</h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold"><span className="text-lg font-bold">Product Name : </span> <br /> {recentProduct.productName}</p>


                <p className="font-bold"><span className="text-lg font-bold">Brand Name : </span> <br />{recentProduct.productBrand}</p>
              </div>

            <div className="border-solid border-2 border-indigo-600 my-3"></div>

              <div>
                <p className="mb-2"><span className="text-lg font-bold">Query Title :</span>{recentProduct.queryTitle}</p>

                <p className="mb-2"><span className="text-lg font-bold">Alternation Reason :</span>{recentProduct.boycotting}</p>

                <p><span className="text-lg font-bold">Date Posted :</span>{recentProduct.date}</p>
              </div>

              <div className="border-solid border-2 border-indigo-600 my-3"></div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;
