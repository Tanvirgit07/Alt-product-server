
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Queries = () => {
  const [allData, setAllData] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Filtered data based on search query
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [gridLayout, setGridLayout] = useState("grid-cols-3"); // Grid layout state

  // Fetch data from the server and set both original and filtered data
  useEffect(() => {
    fetch("https://alternative-product-information-server-iota.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setAllData(sortedData);
        setFilteredData(sortedData); // Initially, both states are the same
      });
  }, []);

  // Handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterData(query);
  };

  // Filter data based on the search query
  const filterData = (query) => {
    if (!query) {
      setFilteredData(allData); // If query is empty, show all items
    } else {
      const filtered = allData.filter(
        (item) =>
          item.productName.toLowerCase().includes(query) ||
          item.productBrand.toLowerCase().includes(query) ||
          item.queryTitle.toLowerCase().includes(query) ||
          item.boycotting.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold mt-5 mb-10 text-center">
        All type of post here!!
      </h1>

      <div className="mb-5 text-center">
        <label className="input max-w-lg mb-10 mx-auto input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow input-secondary"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`btn ${gridLayout === "grid-cols-1" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setGridLayout("grid-cols-1")}
          >
            1 Column
          </button>
          <button
            className={`btn ${gridLayout === "grid-cols-2" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setGridLayout("grid-cols-2")}
          >
            2 Columns
          </button>
          <button
            className={`btn ${gridLayout === "grid-cols-3" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setGridLayout("grid-cols-3")}
          >
            3 Columns
          </button>
        </div>
      </div>

      <div className={`grid ${gridLayout} gap-8`}>
        {filteredData.map((aPost) => (
          <div
            key={aPost._id}
            className="card card-compact bg-base-100 shadow-2xl border-solid border-2 border-warning"
          >
            <figure className="bg-white-300 py-5 w-96">
              <img
                src={aPost.productURL}
                alt="Shoes"
                className="w-4/5 h-72 mx-auto"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 rounded-full">
                  <img src={aPost.photoURL} className="rounded-full" alt="" />
                </div>
                <h2 className="card-title">{aPost.name}</h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold">
                  <span className="text-lg font-bold">Product Name : </span>
                  <br /> {aPost.productName}
                </p>

                <p className="font-bold">
                  <span className="text-lg font-bold">Brand Name : </span>
                  <br />
                  {aPost.productBrand}
                </p>
              </div>

              <div className="border-solid border-2 border-warning my-3"></div>

              <div>
                <p className="mb-2">
                  <span className="text-lg font-bold">Query Title :</span>
                  {aPost.queryTitle}
                </p>

                <p className="mb-2">
                  <span className="text-lg font-bold">Alternation Reason :</span>
                  {aPost.boycotting}
                </p>

                <p className="mb-2">
                  <span className="text-lg font-bold">RecommendationCount :</span>
                  {aPost.recommendationCount}
                </p>

                <p>
                  <span className="text-lg font-bold">Date Posted :</span>
                  {aPost.date}
                </p>
              </div>

              <div className="border-solid border-2 border-warning my-3"></div>

              <div>
                <Link to={`/details/${aPost._id}`}>
                  <button className="btn btn-outline btn-warning w-full">
                    Recommend
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;

