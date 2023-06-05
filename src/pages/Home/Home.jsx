import Banner from "../../utilities/Banner/Banner";
import Contact from "../../utilities/Contact/Contact";
import Heading from "../../utilities/Heading/Heading";
import img1 from "../../assets/images/cups/Rectangle 9.png";
import img2 from "../../assets/images/cups/Rectangle 10.png";
import img3 from "../../assets/images/cups/Rectangle 11.png";
import img4 from "../../assets/images/cups/Rectangle 12.png";
import img5 from "../../assets/images/cups/Rectangle 13.png";
import img6 from "../../assets/images/cups/Rectangle 14.png";
import img7 from "../../assets/images/cups/Rectangle 15.png";
import img8 from "../../assets/images/cups/Rectangle 16.png";
import imgIcons1 from "../../assets/images/icons/1.png";
import imgIcons2 from "../../assets/images/icons/2.png";
import imgIcons3 from "../../assets/images/icons/3.png";
import imgIcons4 from "../../assets/images/icons/4.png";
import { Link, useLoaderData } from "react-router-dom";
import Coffe from "../../components/Coffe";
import { useState } from "react";
import { FaMugHot } from "react-icons/fa";

const Home = () => {
  const coffeDatasLodaer = useLoaderData();
  const [coffeDatas, setcoffeDatas] = useState(coffeDatasLodaer);

  return (
    <div>
      <Banner></Banner>
      <div className=" bg-[#ECEAE3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my_conatiner py-10  gap-20">
          <div className="text-[#331A15]">
            <img src={imgIcons1} alt="" />
            <h3 className="text-2xl my-3">Awesome Aroma</h3>
            <p className="text-base">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="text-[#331A15]">
            <img src={imgIcons2} alt="" />
            <h3 className="text-2xl my-3">High Quality</h3>
            <p className="text-base">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="text-[#331A15]">
            <img src={imgIcons3} alt="" />
            <h3 className="text-2xl my-3">Pure Grades</h3>
            <p className="text-base">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="text-[#331A15]">
            <img src={imgIcons4} alt="" />
            <h3 className="text-2xl my-3">Proper Roasting</h3>
            <p className="text-base">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
      {/* our products  */}
      <div className="my_conatiner  my-10 text-center">
        <p className="text-base">-- Slip & Savour --</p>
        <Heading title="Our Popular Products"></Heading>
        <Link to="/addCoffes">
          <button className="btn btn-warning text-base bg-[#E3B577] rounded-none">
            Add new coffe{" "}
            <span className="ml-3">
              <FaMugHot></FaMugHot>
            </span>
          </button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {coffeDatas.slice(0, 6).map((data) => (
            <Coffe
              key={data._id}
              data={data}
              coffeDatas={coffeDatas}
              setcoffeDatas={setcoffeDatas}
            ></Coffe>
          ))}
        </div>
      </div>
      {/* follow on us */}
      <div className="follow text-center my-20 my_conatiner ">
        <p className="text-base">Follow Us Now</p>
        <Heading title="Follow on Instagram"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
          <div>
            <img src={img8} alt="" />
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
