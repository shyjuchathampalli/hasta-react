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
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 my-6">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Explore our advanced cosmetic dentistry, laser treatments, and personalized care.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap pt-14 gap-5">
  <ServicesCard
    icon={icon1}
    title="Smile Designing"
    description="At HASTA WELLNESS Clinic, Kazhakuttam, Trivandrum, we offer specialist cosmetic dentistry for your perfect smile."
  />
  <ServicesCard
    icon={icon2}
    title="Laser Dentistry"
    description="Experience the future of surgical dentistry with painless, scalpel-free, and stitch-free laser treatments."
  />
  <ServicesCard
    icon={icon3}
    title="Laser Treatment for Gum Disease"
    description="Effectively treat gum disease with virtually painless laser therapy."
  />
  <ServicesCard
    icon={icon1}
    title="Laser Skin Rejuvenation"
    description="Advanced laser treatment to boost collagen production, reduce wrinkles, and improve skin texture, restoring your youthful glow and achieving smoother, revitalized skin."
  />
  <ServicesCard
    icon={icon2}
    title="Hyperpigmentation Therapy"
    description="Customized treatments targeting dark spots and uneven skin tone, effectively reducing hyperpigmentation for a brighter, more radiant, and even complexion."
  />
  <ServicesCard
    icon={icon3}
    title="IV Antioxidant & Anti-aging Therapy"
    description="IV drips packed with antioxidants to combat aging, detoxify, and promote healthy, glowing skin from within, revitalizing you from the inside out."
  />
  <ServicesCard
    icon={icon1}
    title="Anti-hair Fall Mesotherapy Therapy"
    description="A proven solution for hair loss, using nutrient-rich serums injected into the scalp to nourish hair follicles, strengthen roots, and encourage healthy hair growth."
  />
  <ServicesCard
    icon={icon2}
    title="Dandruff Therapy"
    description="Personalized scalp treatments to eliminate dandruff, reduce irritation, and restore scalp health, ensuring flake-free, balanced, and refreshed hair."
  />
  <ServicesCard
    icon={icon3}
    title="Advanced PRP Hair Therapy"
    description="Regenerate hair growth with advanced Platelet-Rich Plasma (PRP) therapy, using your body’s healing power to stimulate hair follicles and thicken hair naturally."
  />
  <ServicesCard
    icon={icon1}
    title="GFC Hair Therapy"
    description="Cutting-edge Growth Factor Concentrate (GFC) therapy designed to rejuvenate hair follicles and promote denser, stronger hair growth using advanced regenerative technology."
  />
  <ServicesCard
    icon={icon2}
    title="Dental Appointments"
    description="Comprehensive dental care services for your oral health, from routine check-ups and cleanings to personalized treatments, ensuring a confident and healthy smile."
  />
  <ServicesCard
    icon={icon3}
    title="Aesthetic Smile Designing"
    description="Transform your smile with customized smile design treatments, enhancing the aesthetics of your teeth and facial harmony for a confident, radiant smile."
  />
  <ServicesCard
    icon={icon1}
    title="Body Contouring & Fat Loss"
    description="Non-surgical body sculpting solutions to reduce stubborn fat, contour your shape, and boost body confidence through targeted, effective fat reduction techniques."
  />
</div>
    </div>
  );
};

export default Services;
