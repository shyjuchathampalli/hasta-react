import React from 'react';
import Packages from './blocks/Packages';

function Treatment() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden lg:px-32 px-5">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-12">
            <Packages
              title="ADVANCED LASER TREATMENT"
              description="Our advanced laser treatments offer a transformative experience, targeting various cosmetic and dental concerns with precision and care."
            />
            <Packages
              title="Glutathione Whitening Treatment"
              description="We grasp its advantages and have developed unique approaches to ensure its effective penetration into the skin, leading to favorable outcomes."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Treatment;
