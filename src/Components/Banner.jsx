import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[30vh] mb-10 rounded-xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/s5GKMYh/universe-1566161-1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-3xl font-bold">You can find alternative product here !!</h1>
          <Link to='/queries'><button className="bg-red-400 py-3 px-9 rounded-full text-lg font-bold text-[#1D1F21]">Queries</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
