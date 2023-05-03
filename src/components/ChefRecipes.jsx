import React, { useEffect, useState } from "react";
import {
  FaArrowAltCircleDown,
  FaBomb,
  FaCookie,
  FaRegBookmark,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";

const ChefRecipes = () => {
  const [favorite1, setFavorite1] = useState(false);
  const [favorite2, setFavorite2] = useState(false);
  const [favorite3, setFavorite3] = useState(false);

  const [allChefData, setAllChefData] = useState([]);
  const [singleChefData, setSingleChefData] = useState({});
  const { id } = useParams();
  console.log(id);

  const addToFavorite1 = () => {
    setFavorite1(true);
    toast("Recipe added to favorite");
  };
  const addToFavorite2 = () => {
    setFavorite2(true);
    toast("Recipe added to favorite");
  };
  const addToFavorite3 = () => {
    setFavorite3(true);
    toast("Recipe added to favorite");
  };

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

  console.log(singleChefData?.recipes?.[0]);

  // const navigation = useNavigation();
  // console.log(navigation.state);
  if (!singleChefData || !allChefData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

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
            {singleChefData && (
              <img
                className="rounded-2xl"
                src={singleChefData.chef_picture}
                alt=""
              />
            )}
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
          Here are some famous recipes of chef{" "}
          <span className="text-error">{singleChefData.chef_name}</span>
        </h2>
      )}
      {/* recipe section start */}
      {/* first recipe */}
      <div className="card w-[1100px] mx-auto lg:card-side bg-base-100 shadow-xl flex mb-3">
        <div className="card-body flex-1">
          <h2 className="card-title text-2xl font-semibold">
            {singleChefData?.recipes?.[0].recipe_name}
          </h2>
          <h3 className="text-lg font-medium">Ingredients :</h3>
          {/* ingredients */}
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[0].ingredients.first}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[0].ingredients.second}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[0].ingredients.third}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[0].ingredients.fourth}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[0].ingredients.fifth}</span>
            </li>
            {singleChefData?.recipes?.[0].ingredients.sixth && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[0].ingredients.sixth}</span>
              </li>
            )}
            {singleChefData?.recipes?.[0].ingredients.seventh && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[0].ingredients.seventh}</span>
              </li>
            )}
            {singleChefData?.recipes?.[0].ingredients.eighth && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[0].ingredients.eighth}</span>
              </li>
            )}
          </ul>
          {/* cooking method */}
          <div className="mb-2">
            <h3 className="text-lg font-medium mb-2">Cooking method :</h3>
            <p>{singleChefData?.recipes?.[0].cooking_method}</p>
          </div>
          {/* rating and favorite */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rating
                className="text-warning"
                initialRating={singleChefData?.recipes?.[0].ratings}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                fullSymbol={<FaStar></FaStar>}
              />{" "}
              <span className="font-semibold">
                {singleChefData?.recipes?.[0].ratings}
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Add to favorite</span>
              <button onClick={addToFavorite1} disabled={favorite1 && true}>
                <FaRegBookmark className="text-warning cursor-pointer"></FaRegBookmark>
              </button>
            </div>
          </div>
        </div>
        <figure className="flex-1">
          {singleChefData && (
            <img
              className="rounded-2xl"
              src={singleChefData?.recipes?.[0].recipe_photo}
              alt="Album"
            />
          )}
        </figure>
      </div>

      {/* second recipe */}
      <div className="card w-[1100px] mx-auto lg:card-side bg-base-100 shadow-xl flex mb-3">
        <figure className="flex-1">
          {singleChefData && (
            <img
              className="rounded-2xl"
              src={singleChefData?.recipes?.[1].recipe_photo}
              alt="Album"
            />
          )}
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-2xl font-semibold">
            {singleChefData?.recipes?.[1].recipe_name}
          </h2>

          {/* ingredients */}
          <h3 className="text-lg font-medium">Ingredients :</h3>
          <ul>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[1].ingredients.first}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[1].ingredients.second}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[1].ingredients.third}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[1].ingredients.fourth}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[1].ingredients.fifth}</span>
            </li>
            {singleChefData?.recipes?.[1].ingredients.sixth && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[1].ingredients.sixth}</span>
              </li>
            )}
            {singleChefData?.recipes?.[1].ingredients.seventh && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[1].ingredients.seventh}</span>
              </li>
            )}
            {singleChefData?.recipes?.[1].ingredients.eighth && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[1].ingredients.eighth}</span>
              </li>
            )}
          </ul>

          {/* cooking method */}
          <div className="mb-2">
            <h3 className="text-lg font-medium mb-2">Cooking method :</h3>
            <p>{singleChefData?.recipes?.[1].cooking_method}</p>
          </div>
          {/* rating and favorite */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rating
                className="text-warning"
                initialRating={singleChefData?.recipes?.[1].ratings}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                fullSymbol={<FaStar></FaStar>}
              />{" "}
              <span className="font-semibold">
                {singleChefData?.recipes?.[1].ratings}
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Add to favorite</span>
              <button onClick={addToFavorite2} disabled={favorite2 && true}>
                <FaRegBookmark className="text-warning cursor-pointer"></FaRegBookmark>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* third recipe */}
      <div className="card w-[1100px] mx-auto lg:card-side bg-base-100 shadow-xl flex mb-8">
        <div className="card-body flex-1">
          <h2 className="card-title text-2xl font-semibold">
            {singleChefData?.recipes?.[2].recipe_name}
          </h2>

          {/* ingredients */}
          <h3 className="text-lg font-medium">Ingredients :</h3>
          <ul>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[2].ingredients.first}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[2].ingredients.second}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[2].ingredients.third}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[2].ingredients.fourth}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBomb></FaBomb>{" "}
              <span>{singleChefData?.recipes?.[2].ingredients.fifth}</span>
            </li>
            {singleChefData?.recipes?.[2].ingredients.sixth && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[2].ingredients.sixth}</span>
              </li>
            )}
            {singleChefData?.recipes?.[2].ingredients.seventh && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[2].ingredients.seventh}</span>
              </li>
            )}
            {singleChefData?.recipes?.[2].ingredients.eighth && (
              <li className="flex items-center gap-2">
                <FaBomb></FaBomb>{" "}
                <span>{singleChefData?.recipes?.[2].ingredients.eighth}</span>
              </li>
            )}
          </ul>

          {/* cooking method */}
          <div className="mb-2">
            <h3 className="text-lg font-medium mb-2">Cooking method :</h3>
            <p>{singleChefData?.recipes?.[2].cooking_method}</p>
          </div>
          {/* rating and favorite */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rating
                className="text-warning"
                initialRating={singleChefData?.recipes?.[2].ratings}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                fullSymbol={<FaStar></FaStar>}
              />{" "}
              <span className="font-semibold">
                {singleChefData?.recipes?.[2].ratings}
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Add to favorite</span>
              <button onClick={addToFavorite3} disabled={favorite3 && true}>
                <FaRegBookmark className="text-warning cursor-pointer"></FaRegBookmark>
              </button>
            </div>
          </div>
        </div>
        <figure className="flex-1">
          {singleChefData && (
            <img
              className="rounded-2xl"
              src={singleChefData?.recipes?.[2].recipe_photo}
              alt="Album"
            />
          )}
        </figure>
      </div>
      {/* recipe section end */}
    </div>
  );
};

export default ChefRecipes;
