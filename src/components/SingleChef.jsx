import React from "react";

const SingleChef = ({ singleChefData }) => {
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
  } = singleChefData;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={chef_picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
      </div>
    </div>
  );
};

export default SingleChef;
