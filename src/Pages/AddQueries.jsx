import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddQueries = () => {
  const {user} = useContext(AuthContext);

    const handleQueries = e =>{
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const boycotting = form.boycotting.value;
        const queryTitle = form.queryTitle.value;
        const productURL = form.productURL.value;
        const photoURL = user.photoURL;
        const email = user.email;
        const name = user.displayName;
        const date = Date(Date.now()).slice(0,24);
        const recommendationCount = 0;

        // console.log(productName,productBrand,boycotting,queryTitle,productURL)
        const queriesInfo = {productName,productBrand,boycotting,queryTitle,productURL,photoURL,email,name,date,recommendationCount}
        console.log(queriesInfo)

        fetch('https://alternative-product-information-server-iota.vercel.app/product' , {
          method : 'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(queriesInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire({
            title: "Add post Data",
            text: "Successfully added data!",
            icon: "success"
          });
        })
    }
  return (
    <div className="max-w-3xl mx-auto mt-10 border-solid border-2 border-secondary px-7 py-10 rounded-xl shadow-2xl">
      <form onSubmit={handleQueries} className="">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-lg font-medium mb-1">Product Name</p>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <p className="text-lg font-medium mb-1">Product Brand</p>
            <input
              type="text"
              name="productBrand"
              placeholder="Product Brand"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <p className="text-lg font-medium mb-1">Boycotting Details</p>
            <input
              type="text"
              name="boycotting"
              placeholder="Boycotting Details"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <p className="text-lg font-medium mb-1">Query TItle</p>
            <input
              type="text"
              name="queryTitle"
              placeholder="Query TItle"
              className="input input-bordered input-secondary w-full"
            />
          </div>
        </div>
        <div className="">
          <div className="mb-5 mt-4">
            <p className="text-lg font-medium mb-1">Product Image-URL</p>
            <input
              type="text"
              name="productURL"
              placeholder="Product Image-URL"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div className="">
            <button className="btn w-full btn-outline btn-secondary mt-4">Add Queries</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQueries;
