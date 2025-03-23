"use client"
import fetchFood from "./api/fetchFood"
import {useEffect, useState} from "react"

const Home = () => {
  const [foodData, setFoodData] = useState<any>()
  useEffect(() => {
    const getFood = async () => {
      const data = await fetchFood()
      setFoodData(data)
    };
    getFood()
  }, []);

  console.log(foodData)
  return (
    <div>
    {Array.isArray(foodData) && foodData.length > 0 ? (
      foodData.map((recipe, index) => (
        <div key={index}>{recipe.title}</div>
      ))
    ) : (
      <p>loading...</p>
    )}
    </div>
    
  );
}

export default Home