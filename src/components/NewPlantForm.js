import React, {useState} from "react";

function NewPlantForm({createPlant}) {
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleChange = (e) => {
    setPlantData({
      ...plantData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        name: plantData.name,
        image: plantData.image,
        price: plantData.price,
      })
    })
    .then((r)=>r.json())
    .then((plant)=>{
      console.log(plant)
      createPlant(plant)
      console.log("plant added to db")
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
