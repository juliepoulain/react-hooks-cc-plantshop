import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("");

  const [plants, setPlants] = useState([])

  const createPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm createPlant={createPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList search={search}/>
    </main>
  );
}

export default PlantPage;
