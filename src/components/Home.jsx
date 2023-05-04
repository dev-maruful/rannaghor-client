import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefData from "./ChefData";
import FeaturedFoods from "./FeaturedFoods";
import Partners from "./Partners";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const [chefData, setChefData] = useState([]);
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-tawsif-adnan.vercel.app/chefdata")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://assignment-10-server-tawsif-adnan.vercel.app/featuredfoods")
      .then((res) => res.json())
      .then((data) => setFeaturedFoods(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://assignment-10-server-tawsif-adnan.vercel.app/partners")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!chefData || !featuredFoods || !partners) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <Banner></Banner>
      <ChefData chefData={chefData}></ChefData>
      <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
      <Partners partners={partners}></Partners>
    </div>
  );
};

export default Home;
