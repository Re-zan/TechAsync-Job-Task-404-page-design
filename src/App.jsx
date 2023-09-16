import bg from "./assets/bg.jpg";
import Lottie from "lottie-react";
import animation from "./assets/animation_lmlo6qrj.json";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const App = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-[600px]  lg:min-h-screen flex items-center justify-center "
    >
      <section className="my_container space-y-4 ">
        <Lottie
          animationData={animation}
          loop={true}
          className="w-[300px] md:w-[500px] lg:w-[600px] mx-auto"
        />
        <p className="text-center text-4xl text-black -mt-8">
          Our Re-zanCahrity website is currently under development
        </p>
        <div className=" w-44 mx-auto ">
          <Link to="https://re-zan-charity.vercel.app/">
            <button className=" px-5 py-3  bg-black/50 text-white/60 hover:bg-black hover:text-white duration-500  mt-2 hover:rounded-lg flex items-center gap-2">
              <span>
                <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
              </span>{" "}
              Go back Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default App;
