import React, { useState } from "react";
import firebase from "../firebase";

const AddProperties = () => {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [prize, setPrize] = useState(0);
  const [place, setPlace] = useState("");
  const [showers, setShowers] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [cars, setCars] = useState("");

  const handleClick = () => {
    const globalRef = firebase.database().ref().child("Global");
    const populationRef = globalRef.child("population");
    const obj = {
      category: category,
      status: status,
      prize: prize,
      place: place,
      id: id,
      showers: showers,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      cars: cars,
    };

    populationRef.push(obj);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form style={{ marginTop: "100px", width: "100vw" }} action="">
        <h1
          style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}
        >
          Agrega una nueva propiedad
        </h1>
        <h3
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          ID
        </h3>
        <h6
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          El ID te servira para editar o borrar la propiedad más adelante,
          asegurate de que sea unico y de poder recordarlo{" "}
        </h6>

        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="text"
          name="property_id"
          placeholder="Ejemplo de ID:   Loft01"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <h3
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Tipo de propiedad
        </h3>

        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="text"
          name="category"
          placeholder="Ejemplo: Departamento"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <h3
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Status
        </h3>
        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="text"
          name="status"
          placeholder="Ejemplo: Renta"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <h3
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Precio
        </h3>

        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="text"
          name="prize"
          placeholder="Ejemplo: 14,500"
          onChange={(e) => {
            setPrize(e.target.value);
          }}
        />
        <h3
          style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
        >
          Localización
        </h3>

        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="text"
          name="place"
          placeholder="Ejemplo: Zapopan, Jal."
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="number"
          name="bathrooms"
          placeholder="Ejemplo: Zapopan, Jal."
          onChange={(e) => {
            setBathrooms(e.target.value);
          }}
        />
        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="showers"
          name="bathrooms"
          placeholder="Ejemplo: Zapopan, Jal."
          onChange={(e) => {
            setShowers(e.target.value);
          }}
        />
        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="number"
          name="bedrooms"
          placeholder="Ejemplo: Zapopan, Jal."
          onChange={(e) => {
            setBedrooms(e.target.value);
          }}
        />
        <input
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          type="cars"
          name="bathrooms"
          placeholder="Ejemplo: Zapopan, Jal."
          onChange={(e) => {
            setCars(e.target.value);
          }}
        />
        <button
          style={{
            width: "20%",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "10px",
          }}
          onClick={handleClick}
        >
          Create property
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default AddProperties;
