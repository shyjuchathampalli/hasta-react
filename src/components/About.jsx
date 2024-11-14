import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-6 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Hasta Wellness Clinic is a premier dental and wellness clinic located in Kazhakuttam, Trivandrum, dedicated to providing exceptional care and comprehensive treatments for patients of all ages. Our General Dental Care services ensure complete dental health, combining preventive, restorative, and routine check-ups to maintain optimal oral hygiene.
        </p>
        <p className="text-justify lg:text-start">
        At Hasta Wellness, we are dedicated to bringing forth your inherent beauty and vitality through our comprehensive range of dental, skincare, and haircare services. With a commitment to excellence and a passion for holistic wellness, we strive to provide each client with personalized care tailored to their unique needs and desires.
        </p>
        <p className="text-justify lg:text-start">
        At Hasta Wellness Clinic, we craft individualized treatment plans by combining various dental solutions and wellness practices, guaranteeing effective and results-driven care for each client.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
