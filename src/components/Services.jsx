import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Explore our advanced cosmetic dentistry, laser treatments, and personalized care.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button className="text-[#25454c]" title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Smile Designing" description="At HASTA WELLNESS Clinic, Kazhakuttam, Trivandrum, we offer specialist cosmetic dentistry for your perfect smile. Our Smile Makeover combines procedures like Teeth and Gum Recontouring, Whitening, Bonding, Veneers, Laminates, and Crowns to enhance your appearance. Achieve the dazzling smile you desire, with results that boost your confidence and radiate attractiveness." />
        <ServicesCard icon={icon2} title="Laser Dentistry" description="Experience the future of surgical dentistry with painless, scalpel-free, and stitch-free laser treatments. Our advanced diode dental laser effectively addresses soft tissue procedures with minimal anesthesia, reduced bleeding, faster healing, and no discomfort. Ideal for gum disease treatments, gum lifts, and minor surgeries, laser dentistry ensures a comfortable, anxiety-free experience." />
        <ServicesCard icon={icon3} title="Laser Treatment for Gum Disease" description="Effectively treat gum disease with virtually painless laser therapy. Our lasers eliminate bacteria, clean debris, and aid healthy gum attachment with minimal bleeding and swelling. Experience faster healing without scalpels or stitches, achieving a harmonious, healthy gum line for a beautiful, confident smile. Dental lasers are a revolutionary alternative for comfortable, efficient periodontal care." />
      </div>
    </div>
  );
};

export default Services;
