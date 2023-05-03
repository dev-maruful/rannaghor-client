import React from "react";

const SinglePartner = ({ partner }) => {
  const { id, company_logo } = partner;

  return (
    <div className="card card-compact md:w-56 bg-base-100 shadow-xl">
      <figure>
        <img src={company_logo} alt="Shoes" />
      </figure>
    </div>
  );
};

export default SinglePartner;
