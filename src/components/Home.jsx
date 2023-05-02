import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefData from "./ChefData";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
  const [chefData, setChefData] = useState(null);
  const [featuredFoods, setFeaturedFoods] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/chefdata")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/featuredfoods")
      .then((res) => res.json())
      .then((data) => setFeaturedFoods(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <ChefData chefData={chefData}></ChefData>
      <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
    </div>
  );
};

export default Home;
