import { Link, useNavigate } from "react-router-dom";
import { CustomButton1 } from "../components/CustomButton1";

export const Home = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-20 py-10 h-screen">
      <div className="w-full lg:w-1/2 lg:pr-10">
        <div className="text-center lg:text-left mb-6">
          <h1 className="text-3xl font-bold">Welcome to ComplainBox</h1>
        </div>
        <div className="mb-6">
          <p className="text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in
            inventore reprehenderit impedit, quia officia a commodi, maiores
            accusamus quidem laboriosam magni, repudiandae aliquam dolor qui
            repellendus consectetur quae beatae?
          </p>
        </div>
        <div className="mb-6">
          <p className="text-center lg:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti necessitatibus delectus laborum. Impedit dolor, saepe
            facere repudiandae praesentium libero!
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center lg:items-start">
        <div className="mb-6 lg:ml-6 w-1/2 border px-4 pb-10 rounded-sm shadow-lg">
          <div className="font-medium text-center pt-2 pb-5 text-xl">
            Get Started
          </div>
          <CustomButton1
            label={"Signup"}
            colour={"red"}
            clickHandler={goToSignup}
          />
          <CustomButton1
            label={"Login"}
            colour={"blue"}
            clickHandler={goToLogin}
          />
        </div>
      </div>
    </div>
  );
};
