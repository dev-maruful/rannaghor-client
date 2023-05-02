import React from "react";
import { FaBullseye } from "react-icons/fa";

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
        <h2 className="card-title text-2xl font-bold">{chef_name}</h2>
        <p className="flex items-center gap-2 text-base font-medium">
          <FaBullseye></FaBullseye> Experience : {years_of_experience} years
        </p>
        <p className="flex items-center gap-2 text-base font-medium">
          <FaBullseye></FaBullseye> Number of recipes : {number_of_recipes}{" "}
          recipes
        </p>
        <p className="flex items-center gap-2 text-base font-medium mb-5">
          <FaBullseye></FaBullseye> Likes : {likes}
        </p>
        <button className="btn btn-outline btn-error text-lg">
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default SingleChef;
