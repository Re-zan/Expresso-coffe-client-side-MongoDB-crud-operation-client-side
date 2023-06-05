import bgImag from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";
const Header = () => {
  return (
    <nav
      style={{
        backgroundImage: `url('${bgImag}')`,
        backgroundPosition: "cover",
        backgroundRepeat: "np-repeat",
      }}
    >
      <div className="max-w-screen-xl flex items-center mx-auto p-6 justify-center">
        <img src={logo} alt="" className=" w-20 " />
        <h2 className="text-white text-6xl">Espresso Emporium</h2>
      </div>
    </nav>
  );
};

export default Header;
