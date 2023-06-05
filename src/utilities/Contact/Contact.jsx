import bgImag from "../../assets/images/more/13.jpg";
import logo from "../../assets/images/more/logo1.png";
import Heading from "../Heading/Heading";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="contact_img h-[1250px] md:h-[750px]"
      style={{
        backgroundImage: `url('${bgImag}')`,
        backgroundPosition: "cover",
        backgroundRepeat: "np-repeat",
      }}
    >
      <div className=" my_conatiner grid grid-cols-1 md:grid-cols-2 pt-28 pb-20">
        <div>
          <img src={logo} alt="" className=" w-20 " />
          <Heading title="Espresso Emporium"></Heading>
          <p className="text-xl">
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br></br>
            memorable moments, to share with your best companion.
          </p>
          <div className="icons flex text-[#331a15] text-3xl my-4">
            <FaFacebookSquare className="mr-3  " />
            <FaTwitter className="mr-3 text_shadowes" />
            <FaInstagram className="mr-3 text_shadowes" />
            <FaLinkedin className="mr-3 text_shadowes" />
          </div>
          <Heading title="Get in Touch"></Heading>

          <div className="flex items-center">
            <FaPhoneAlt />
            <p className="text-base ml-4"> +88 01533 333 333</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope />
            <p className="text-base ml-4 my-4"> info@gmail.com </p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt />
            <p className="text-base ml-4">
              {" "}
              72, Wall street, King Road, Dhaka{" "}
            </p>
          </div>
        </div>
        <div className="mt-20">
          {" "}
          <Heading title="Connect with Us"></Heading>
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="input w-full "
            />
          </div>
          <div className="my-6">
            <input
              type="email"
              placeholder="Your email"
              className="input w-full "
            />
          </div>
          <div>
            <textarea
              className="textarea w-full  textarea-lg "
              placeholder="Bio"
            ></textarea>
          </div>
          <button className="btn rounded-3xl bg-transparent border border-[#331A15] text-[#331A15] px-10 text-base my-4">
            Contant Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
