import React from "react";
import SingleChef from "./SingleChef";

const ChefData = ({ chefData }) => {
  console.log(chefData);
  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl font-extrabold mb-10">
        Our Dedicated Chefs!!!
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
        {chefData?.map((singleChefData) => (
          <SingleChef
            key={singleChefData.id}
            singleChefData={singleChefData}
          ></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default ChefData;
