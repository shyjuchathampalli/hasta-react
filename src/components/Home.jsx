import React from "react";
import { Link } from 'react-scroll';
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover bg-center opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10 lg:mt-[100px]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#48717a]"> 
          Welcome to our clinic, offering the best in Dermatology, Cosmetology &<br/> Dental Treatment.
        </h1>
        <p className="py-2 text-[#48717a]">
          Modern Technology, Fast support. Personal appointments, online consultations, and more. Contact us for unique services.
        </p>

        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className="mt-6 cursor-pointer"
        >
          <Button
            title="See Services"
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
