import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => {
        setPlants(plants)
        console.log(plants);
      });
  }, []);

  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      image={plant.image}
      name={plant.name}
      price={plant.price}
    />
  ))

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
