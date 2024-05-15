import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const My_queries = () => {
  const [addData, setAddData] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(addData);
  useEffect(() => {
    fetch(`https://alternative-product-information-server-iota.vercel.app/productPost?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAddData(sorted);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://alternative-product-information-server-iota.vercel.app/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = addData.filter(
                (singleDelete) => singleDelete._id !== _id
              );
              setAddData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div
        className="hero h-[30vh] rounded-xl my-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/LZYcK6J/banner-1176676-1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <Link to="/addQueries">
              <button className="btn btn-outline btn-secondary">
                Add Queries
              </button>
            </Link>
          </div>
        </div>
      </div>
      {addData.length >= 1 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {addData.map((sortData) => (
            <div
              key={sortData._id}
              className="card card-compact lg:w-[410px] bg-base-100 shadow-2xl border-solid border-2 border-secondary"
            >
              <figure className="bg-white-300 py-5 w-96">
                <img
                  src={sortData.productURL}
                  className="w-4/5 h-64 mx-auto"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full">
                    <img
                      src={sortData.photoURL}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="card-title">{sortData.name}</h2>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-xl">
                    Product Name : <br />
                    <span className="text-lg font-semibold">
                      {sortData.productName}
                    </span>
                  </p>
                  <p className="font-bold text-xl">
                    Product Brand : <br />
                    <span className="text-lg font-semibold">
                      {sortData.productBrand}
                    </span>
                  </p>
                </div>

                <div className="border-solid border-2 border-secondary my-3"></div>

                <div>
                  {/* <p className="mb-2"><span className="text-lg font-bold">Query Title :</span>{sortData.queryTitle}</p> */}

                  <p className="mb-2">
                    <span className="text-lg font-bold">
                      Alternation Reason :
                    </span>
                    {sortData.boycotting}
                  </p>
                </div>

                <div className="border-solid border-2 border-secondary my-3"></div>
              </div>
              <div className="flex justify-evenly mb-3">
                <div>
                  <Link to={`/update/${sortData._id}`}>
                    <button className="btn btn-outline btn-success">
                      Update
                    </button>
                  </Link>
                </div>
                <div onClick={() => handleDelete(sortData._id)}>
                  <button className="btn btn-outline btn-error">Delete</button>
                </div>
                <div>
                  <Link to={`/details/${sortData._id}`}>
                    <button className="btn btn-outline btn-accent">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-400 h-[50vh] flex justify-center items-center rounded-xl">
          <div className=" max-w-lg mx-auto">
            <div className="">
              <h1 className="text-4xl font-bold text-center">
                No Post Available !!
              </h1>
              <h1 className="text-2xl font-bold text-center mt-3">
                Please Add Queries!
              </h1>
            </div>
            <div className="flex items-center justify-center mt-5">
              <Link to="/addQueries">
                <button className="bg-[#BF00FF] py-3 px-9 rounded-full text-lg font-bold text-[#1D1F21] ">
                  Add Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default My_queries;
