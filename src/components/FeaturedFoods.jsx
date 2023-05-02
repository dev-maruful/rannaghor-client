import React from "react";
import SingleFood from "./SingleFood";

const FeaturedFoods = ({ featuredFoods }) => {
  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl font-extrabold mb-10">
        Our Featured Recipes!!!
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
        {featuredFoods?.map((singleFood) => (
          <SingleFood key={singleFood.id} singleFood={singleFood}></SingleFood>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
