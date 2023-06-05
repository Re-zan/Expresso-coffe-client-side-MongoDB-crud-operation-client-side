import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffe = ({ data, coffeDatas, setcoffeDatas }) => {
  const { _id, name, chef, details, photo } = data;

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:3000/coffes/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const deletedData = coffeDatas.filter((datas) => datas._id !== _id);
            setcoffeDatas(deletedData);
          });
      }
    });
  };

  return (
    <div className="flex justify-between items-center gap-8 bg-[#F5F4F1] px-2 py-6 ">
      <img src={photo} alt="" className=" w-40 h-40" />
      <div className="">
        <p>name:{name}</p>
        <p className="my-3">chef:{chef}</p>
        <p>details:{details}</p>
      </div>
      <div className="btn-group btn-group-vertical">
        <Link to={`/coffes/${_id}`}>
          {" "}
          <button className="btn btn-warning rounded-none p-3 text-xl text-white">
            <FaEye />
          </button>
        </Link>
        <Link to={`/coffesUpdate/${_id}`}>
          <button className="btn my-5 p-3 text-xl text-white">
            <FaEdit />
          </button>
        </Link>
        <button
          className="btn rounded-none btn-error p-3 text-xl text-white"
          onClick={() => handleDelete(_id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Coffe;
