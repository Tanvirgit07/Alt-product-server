import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const My_recommend = () => {
  const [myRecommend, setMyRecommend] = useState([]);
  console.log(myRecommend);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://alternative-product-information-server-iota.vercel.app/recommendPostMy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyRecommend(data);
      });
  }, [user?.email]);

  const handleInfoDelete = (_id,queryId) => {
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
        fetch(`https://alternative-product-information-server-iota.vercel.app/recommend/${_id}`, {
          method: "DELETE",
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify({queryId : queryId})
        })
        
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const r = [...myRecommend]
              const remaining = r.filter(
                (singleDelete) => singleDelete._id !== _id
              );
              setMyRecommend(remaining);
              
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">My Recommendation info !</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Recommender Email</th>
                <th>Recommended Product</th>
                <th>Date @ time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {myRecommend.map((singleRec, index) => (
                <tr key={singleRec._id}>
                  <th>{index + 1}</th>
                  <td>{singleRec.reName}</td>
                  <td>{singleRec.productName}</td>
                  <td>{singleRec.reEmail}</td>
                  <td>{singleRec.reProName}</td>
                  <td>{singleRec.reCurrentDate}</td>
                  <td onClick={() => handleInfoDelete(singleRec._id,singleRec.queryId)}>
                    <MdDelete className="text-xl cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_recommend;
