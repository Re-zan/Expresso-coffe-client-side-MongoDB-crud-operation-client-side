import bgImag from "../../assets/images/more/24.jpg";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url('${bgImag}')`,
        backgroundPosition: "cover",
        backgroundRepeat: "np-repeat",
      }}
    >
      <div className="   p-6 text-center bg-black  bg-opacity-50">
        <h2 className="text-white text-xl">
          Copyright Espresso Emporium ! All Rights Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
