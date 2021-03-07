import React, { useState } from "react";
import firebase from "../firebase";

const Propiedad = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [prize, setPrize] = useState(0);
  const [place, setPlace] = useState("");

  const handleClick = () => {
    const globalRef = firebase.database().ref().child("Global");
    const populationRef = globalRef.child("population");
    const obj = {
      category: category,
      status: status,
      prize: prize,
      place: place,
    };

    populationRef.push(obj);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "black", width: "100%" }}>
        Esta es una propiedad individual
      </h1>
      <h1 style={{ color: "black", width: "100%" }}>
        Esta es una propiedad individual
      </h1>

      <h1 style={{ color: "black", width: "100%" }}>
        Esta es una propiedad individual
      </h1>

      <h1 style={{ color: "black", width: "100%" }}>
        Esta es una propiedad individual
      </h1>

      <h1 style={{ color: "black", width: "100%" }}>{category}</h1>

      <h1 style={{ color: "black", width: "100%" }}>
        Esta es una propiedad individual
      </h1>

      <h1 style={{ color: "black", width: "100%" }}>
        Esta es una propiedad individual
      </h1>
      <form action="">
        <input
          type="text"
          name="category"
          placeholder="set category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          type="text"
          name="status"
          placeholder="set status"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <input
          type="number"
          name="prize"
          placeholder="set prize"
          onChange={(e) => {
            setPrize(e.target.value);
          }}
        />
        <input
          type="text"
          name="place"
          placeholder="set place"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <button onClick={handleClick}>Create property</button>
      </form>
    </div>
  );
};

export default Propiedad;
