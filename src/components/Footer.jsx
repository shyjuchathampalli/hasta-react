import React from "react";
import { Link } from "react-scroll";
import img from "../assets/img/Hasta-Logo.png";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
        <div className="p-[10px] bg-white rounded-lg shadow-sm inline-block">
          <img className="w-[180px] h-[63px] rounded-lg" src={img} alt="img" />
        </div>
          <p className=" text-sm mt-4">
          Personalised care & treatment packages from experienced cosmetic surgeons.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Smile Designing
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Laser Dentistry
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Laser Treatment for Periodontal Disease
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
            1st floor, Anjali Arcade, Near Nippon Toyoto,Technopark Phase 3, Service Rd, Kazhakkoottam
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              hello@hastawellnessclinic.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            +91 97784 58883
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
        <span className=" text-hoverColor">&copy; Hasta Wellness Clinic</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
