import React from "react";
import SingleChef from "./SingleChef";

const ChefData = ({ chefData }) => {
  console.log(chefData);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
      {chefData?.map((singleChefData) => (
        <SingleChef
          key={singleChefData.id}
          singleChefData={singleChefData}
        ></SingleChef>
      ))}
    </div>
  );
};

export default ChefData;
