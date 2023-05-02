import React from "react";
import SinglePartner from "./SinglePartner";

const Partners = ({ partners }) => {
  return (
    <div className="mb-36">
      <h2 className="text-center text-4xl font-extrabold mb-10">
        Our Partners
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-5">
        {partners?.map((partner) => (
          <SinglePartner key={partner.id} partner={partner}></SinglePartner>
        ))}
      </div>
    </div>
  );
};

export default Partners;
