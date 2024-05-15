import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const ViewDetails = () => {
  const viewData = useLoaderData();
  const [reCount,setReCount] = useState(viewData.recommendationCount)

  const { user } = useContext(AuthContext);

  const [newData, setNewData] = useState([]);
  console.log(user);
  console.log(viewData);

  console.log(newData);

  const handleRecommend = (e) => {
    e.preventDefault();
    const form = e.target;
    const reProName = form.reProName.value;
    const reTitle = form.reTitle.value;
    const reImage = form.reImage.value;
    const reReason = form.reReason.value;
    const queryId = viewData._id;
    const queryTitle = viewData.queryTitle;
    const productName = viewData.productName;
    const userEmail = viewData.email;
    const userName = viewData.name;
    const reEmail = user.email;
    const reName = user.displayName;
    const reCurrentDate = Date(Date.now()).slice(0, 24);

    const newViewData = {
      reProName,
      reImage,
      reTitle,
      reReason,
      queryId,
      queryTitle,
      productName,
      userEmail,
      userName,
      reName,
      reEmail,
      reCurrentDate,
    };

    console.log(newViewData);

    fetch("https://alternative-product-information-server-iota.vercel.app/recommend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newViewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const t = [...newData,newViewData]
        setNewData(t)
        setReCount(reCount + 1)
      });
  };

  useEffect(() => {
    fetch(`https://alternative-product-information-server-iota.vercel.app/recommend/${viewData?._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewData(data);
       
      });
  }, [viewData?._id]);

  return (
    <div className="my-10">
      <div className="max-w-2xl mx-auto border-solid border-2 border-indigo-600 p-5 rounded-xl">
        <div className="flex gap-4 items-center mb-8">
          <div className="">
            <img
              src={viewData.photoURL}
              className="w12 h-12 rounded-full"
              alt=""
            />
          </div>
          <div>
            <p className="font-medium text-xl">{viewData.name}</p>
            <p>{viewData.date}</p>
          </div>
        </div>
        <div>
          <div className="w-full">
            <img src={viewData.productURL} className="mx-auto mb-10" alt="" />
          </div>
          <div>
            <p className="text-lg font-medium mb-1">
              <span className="text-xl font-bold">Product Name : </span>
              {viewData.productName}
            </p>
            <p className="text-lg font-medium mb-1">
              <span className="text-xl font-bold">Brand Name : </span>
              {viewData.productBrand}
            </p>
          </div>

          <div className="border-solid border-2 border-warning my-7"></div>

          <div className="">
            <p className="text-lg font-medium mb-3">
              <span className="text-xl font-bold">
                Query Title : <br />
              </span>
              {viewData.queryTitle}
            </p>
            <p className="text-lg font-medium mb-3">
              <span className="text-xl font-bold">
                Alternation Reason : <br />
              </span>
              {viewData.boycotting}
            </p>
            <p className="text-lg font-medium mb-1">
              <span className="text-xl font-bold">RecommendationCount : </span>
              {reCount}
            </p>
          </div>
        </div>
      </div>

      <div
        className="hero h-[30vh] mb-10 rounded-xl my-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/s5GKMYh/universe-1566161-1280.jpg)",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60 rounded-xl"></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 lg:text-5xl text-2xl font-bold">
              {/* {" "} */}
              Add Recommendation Form
            </h1>
            
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-5 border-solid border-2 border-[#98FF98] px-7 py-10 rounded-xl shadow-2xl">
        <form onSubmit={handleRecommend}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-lg font-medium mb-1">
                Recommended product Name
              </p>
              <input
                type="text"
                name="reProName"
                placeholder="Product Name"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">Recommendation Title</p>
              <input
                type="text"
                name="reTitle"
                placeholder="Product Title"
                className="input input-bordered input-accent w-full"
              />
            </div>

            <div>
              <p className="text-lg font-medium mb-1">
                Recommended Product Image
              </p>
              <input
                type="text"
                name="reImage"
                placeholder="Product Image"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">Recommendation reason</p>
              <input
                type="text"
                name="reReason"
                placeholder="Reason"
                className="input input-bordered input-accent w-full"
              />
            </div>
          </div>
          <div className="">
            <button
              disabled={viewData?.email === user?.email}
              className="btn w-full btn-outline btn-accent mt-10"
            >
              Add Recommendation
            </button>
          </div>
        </form>
      </div>

      <div
        className="hero shadow-2xl h-[30vh] mb-10 rounded-xl my-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/s5GKMYh/universe-1566161-1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Recommended Product!
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-10">
          {newData.map((singleNew) => (
            <div
              key={singleNew._id}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={singleNew.reImage} alt="Shoes" />
              </figure>
              <div className="flex gap-2">
                <div className="h-12 w-12">
                  <img src="https://i.ibb.co/7Wsz01h/chat-2389223-1280.png" alt="" />
                </div>
                <div>
                  <h2 className="card-title">{singleNew.reName}</h2>
                  <p>{singleNew.reProName}</p>
                  <p>{singleNew.queryTitle}</p>
                  <p>{singleNew.reCurrentDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
