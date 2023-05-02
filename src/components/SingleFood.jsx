import React from "react";

const SingleFood = ({ singleFood }) => {
  const { id, food_picture, food_name } = singleFood;

  return (
    <div className="card card-compact w-96 border-b-4 border-error">
      <figure className="px-10 pt-10">
        <img className="rounded-full" src={food_picture} alt="" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-2xl font-bold">{food_name}</h2>
      </div>
    </div>
  );
};

export default SingleFood;
