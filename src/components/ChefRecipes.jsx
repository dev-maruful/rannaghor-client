import React, { useEffect, useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ChefRecipes = () => {
  const [allChefData, setAllChefData] = useState([]);
  const [singleChefData, setSingleChefData] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("http://localhost:5000/chefdata")
      .then((res) => res.json())
      .then((data) => setAllChefData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const singleChef = allChefData?.find(
      (sChef) => parseInt(sChef.id) === parseInt(id)
    );
    setSingleChefData(singleChef);
  }, [allChefData]);

  // const {
  //   chef_name,
  //   chef_picture,
  //   likes,
  //   number_of_recipes,
  //   recipes,
  //   years_of_experience,
  // } = singleChefData;

  console.log(singleChefData?.recipes);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-8">
        Welcome to the recipes page of chef{" "}
        {singleChefData && (
          <span className="text-error">{singleChefData.chef_name}</span>
        )}
      </h2>

      {/* chef banner start */}
      <div className="flex justify-center">
        <div className="card w-[1050px] flex card-side bg-base-100 shadow-xl mb-28">
          <figure className="flex-1">
            {singleChefData && <img src={singleChefData.chef_picture} alt="" />}
          </figure>
          <div className="card-body flex-1">
            {singleChefData && (
              <h2 className="card-title text-2xl font-semibold">
                <span className="text-error">{singleChefData.chef_name}</span>
              </h2>
            )}
            {singleChefData && (
              <p className="font-medium mb-4">{singleChefData.bio}</p>
            )}
            {singleChefData && (
              <div className="flex gap-2">
                <p className="flex flex-1 flex-col items-center border-2 border-error rounded-lg p-1">
                  <FaArrowAltCircleDown className="text-xl text-error"></FaArrowAltCircleDown>{" "}
                  <span className="text-base font-normal">
                    Number of recipes :
                  </span>
                  <span className="font-semibold">
                    {singleChefData.number_of_recipes}
                  </span>
                </p>
                <p className="flex flex-col flex-1 items-center border-2 border-error rounded-lg p-1">
                  <FaArrowAltCircleDown className="text-xl text-error"></FaArrowAltCircleDown>{" "}
                  <span className="text-base font-normal">
                    Years of experience :
                  </span>
                  <span className="font-semibold">
                    {singleChefData.years_of_experience}
                  </span>
                </p>
                <p className="flex flex-col flex-1 items-center border-2 border-error rounded-lg p-1">
                  <FaArrowAltCircleDown className="text-xl text-error"></FaArrowAltCircleDown>{" "}
                  <span className="text-base font-normal">Likes :</span>
                  <span className="font-semibold">{singleChefData.likes}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* chef banner end */}

      {singleChefData && (
        <h2 className="text-4xl font-bold text-center mb-5">
          Here is some famous recipes of chef{" "}
          <span className="text-error">{singleChefData.chef_name}</span>
        </h2>
      )}
      {/* recipe section start */}
      <div className="card w-[1100px] mx-auto lg:card-side bg-base-100 shadow-xl">
        <figure>
          {/* {singleChefData && (
            <img src={singleChefData?.recipes[0].recipe_photo} alt="Album" />
          )} */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      {/* recipe section end */}
    </div>
  );
};

export default ChefRecipes;
