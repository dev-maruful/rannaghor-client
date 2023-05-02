import React, { useEffect, useState } from "react";
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

  console.log(allChefData);

  useEffect(() => {
    const singleChef = allChefData?.find(
      (sChef) => parseInt(sChef.id) === parseInt(id)
    );
    setSingleChefData(singleChef);
  }, [allChefData]);

  console.log(singleChefData);

  return (
    <div>
      <h1>hello</h1>
      <div>
        {/* {allChefData?.forEach((singleData) => {
          console.log(singleData);
        })} */}
      </div>
    </div>
  );
};

export default ChefRecipes;
