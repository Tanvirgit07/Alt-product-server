import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateData = useLoaderData();
  console.log(updateData);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const boycotting = form.boycotting.value;
    const queryTitle = form.queryTitle.value;
    const productURL = form.productURL.value;

    const newData = {
      productName,
      productBrand,
      boycotting,
      queryTitle,
      productURL,
    };

    console.log(newData);

    fetch(`https://alternative-product-information-server-iota.vercel.app/product/${updateData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "success",
          text: "Successfully update Data!",
          icon: "success",
          confirmButtonText: "Done",
        });
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">Update Your Post !!</h1>
      </div>
      <div className="max-w-3xl mx-auto mt-5 border-solid border-2 border-[#98FF98] px-7 py-10 rounded-xl shadow-2xl">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-lg font-medium mb-1">Product Name</p>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">Product Brand</p>
              <input
                type="text"
                name="productBrand"
                placeholder="Product Brand"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">Boycotting Details</p>
              <input
                type="text"
                name="boycotting"
                placeholder="Boycotting Details"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">Query TItle</p>
              <input
                type="text"
                name="queryTitle"
                placeholder="Query TItle"
                className="input input-bordered input-accent w-full"
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
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="">
              <button className="btn w-full btn-outline btn-accent mt-4">
                Update Queries
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
