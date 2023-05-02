import React from "react";

const SingleFood = ({ singleFood }) => {
  const { id, food_picture, food_name } = singleFood;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={food_picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{food_name}</h2>
      </div>
    </div>
  );
};

export default SingleFood;
