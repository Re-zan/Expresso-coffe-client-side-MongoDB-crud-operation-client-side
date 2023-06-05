import { Link, useLoaderData } from "react-router-dom";
import Contact from "../utilities/Contact/Contact";
import Footer from "../utilities/Footer/Footer";
import Header from "../utilities/Header/Header";
import { FaArrowLeft } from "react-icons/fa";
import Heading from "../utilities/Heading/Heading";
import BgImg from "../assets/images/more/11.png";
const CoffeSingle = () => {
  const datas = useLoaderData();
  const { photo, name, chef, details, supplier, taste } = datas;

  return (
    <div>
      <Header></Header>
      <div
        style={{
          backgroundImage: `url('${BgImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
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
          <div className="flex items-center gap-8 bg-[#F5F4F1] px-2 py-6 ">
            <img src={photo} alt="" className=" w-60" />
            <div className="">
              <Heading title={`${name}`}></Heading>
              <p className="my-3">Chef: {chef}</p>
              <p>Details: {details}</p>
              <p>Supplier: {supplier}</p>
              <p>Taste: {taste}</p>
            </div>
          </div>
        </div>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default CoffeSingle;
