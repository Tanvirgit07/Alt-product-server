import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Recommend = () => {
    const {user} = useContext(AuthContext);
    const [recommendationMe,setMyRecommendationMe] = useState([]);
    console.log(recommendationMe)
    console.log(user)
    useEffect(() =>{
        fetch(`https://alternative-product-information-server-iota.vercel.app/recommend?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyRecommendationMe(data)
        })
    },[user?.email])
    return (
        <div >
            <h1 className="my-10 text-center text-4xl font-bold">Recommend Product for me !</h1>  
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>User Name</th>
        <th>Recommender Email</th>
        <th>Recommended Product</th>
        <th>Date@Time</th>
        <th>User Email</th>
        <th>Post Product</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        recommendationMe.map((singleMe,index) => <tr key={singleMe._id}>
        <th>{index + 1}</th>
        <td>{singleMe.reName}</td>
        <td>{singleMe.reEmail}</td>
        <td>{singleMe.reProName}</td>
        <td>{singleMe.reCurrentDate}</td>
        <td>{singleMe.userEmail}</td>
        <td>{singleMe.productName}</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>          
        </div>
    );
};

export default Recommend;