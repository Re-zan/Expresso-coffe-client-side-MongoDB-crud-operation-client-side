import bannerImg from "../../assets/images/more/3.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${bannerImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "700px",
      }}
      className=" text-white"
    >
      <div className="my_conatiner  grid grid-cols-1 md:grid-cols-2 pt-[160px] md:pt-[320px] text-center md:text-left">
        <div className="sm:hidden md:block"></div>
        <div>
          <h2 className=" text-5xl py-8">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-base pb-8">
            {`It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.`}
          </p>
          <button className="btn btn-warning text-base bg-[#E3B577] rounded-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
