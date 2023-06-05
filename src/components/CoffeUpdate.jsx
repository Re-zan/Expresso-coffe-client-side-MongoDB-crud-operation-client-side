import Contact from "../utilities/Contact/Contact";
import Footer from "../utilities/Footer/Footer";
import Header from "../utilities/Header/Header";
import BgImg from "../assets/images/more/11.png";
import { Form, Link, useLoaderData } from "react-router-dom";
import Heading from "../utilities/Heading/Heading";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeUpdate = () => {
  const datas = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = datas;
  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`http://localhost:3000/coffes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount === 1) {
          Swal.fire({
            title: "Success!",
            text: "Updated Your Coffe data",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        console.log(data);
      });
  };
  return (
    <div>
      <Header></Header>
      <div
        style={{
          backgroundImage: `url('${BgImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "1200px",
        }}
      >
        <div className="my_conatiner">
          <Link to="/">
            <div className="flex items-center">
              {" "}
              <FaArrowLeft className="text-3xl mr-2" />{" "}
              <Heading title="Back To Home"></Heading>
            </div>
          </Link>

          <div className="my-10 bg-[#F4F3F0] p-10">
            <div className="text-center">
              <Heading title="Add New Coffe"></Heading>
              <p className="text-xl">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at <br></br> its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed<br></br>{" "}
                to using Content here.
              </p>
            </div>
            <Form className="my-8" onSubmit={handleUpdate}>
              <div className="flex items-center justify-between gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffe name"
                    className="input input-bordered w-full "
                    required
                    name="name"
                    defaultValue={name}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffe chef name"
                    className="input input-bordered w-full "
                    required
                    name="chef"
                    defaultValue={chef}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffe Supplier"
                    className="input input-bordered w-full "
                    required
                    name="supplier"
                    defaultValue={supplier}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffe Taste"
                    className="input input-bordered w-full "
                    required
                    name="taste"
                    defaultValue={taste}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffe Category"
                    className="input input-bordered w-full "
                    required
                    name="category"
                    defaultValue={category}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffe Details"
                    className="input input-bordered w-full "
                    required
                    name="details"
                    defaultValue={details}
                  />
                </div>
              </div>
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffe photo url"
                className="input input-bordered w-full "
                required
                name="photo"
                defaultValue={photo}
              />
              <button className="btn btn-warning text-base bg-[#E3B577] rounded-none w-full my-10">
                Update Coffe Details
              </button>
            </Form>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default CoffeUpdate;
