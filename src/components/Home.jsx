import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefData from "./ChefData";

const Home = () => {
  const [chefData, setChefData] = useState(null);

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

  return (
    <div>
      <Banner></Banner>
      <ChefData chefData={chefData}></ChefData>
    </div>
  );
};

export default Home;
