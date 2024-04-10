import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("");

  const [plants, setPlants] = useState([])

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList search={search} plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
