import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex">
          <div className="flex-1 w-full">
            <h1 className="text-5xl font-bold">
              Your One-Stop Destination for Recipe Inspiration!
            </h1>
            <p className="py-6">
              Explore a World of Flavors, Techniques, and Ingredients to Elevate
              Your Cooking Game and Transform Every Meal into a Feast for the
              Senses, Whether You're a Novice or a Master in the Kitchen!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="flex-1">
            <img
              src="https://t4.ftcdn.net/jpg/02/31/36/65/240_F_231366513_9N2n4tXOvOr1ElZ77zf1g3aAyqJ58nA8.jpg"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
