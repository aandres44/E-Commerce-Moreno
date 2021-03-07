import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import firebase from "../firebase";

function Propiedades() {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [prize, setPrize] = useState(0);
  const [place, setPlace] = useState("");
  const [data, setData] = useState([
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: 900,
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
      path: "/propiedad",
    },
  ]);

  const handleClick = () => {
    const globalRef = firebase.database().ref().child("Global");
    const populationRef = globalRef.child("population");
    const obj = {
      category: category,
      status: status,
      prize: prize,
      place: place,
      id: id,
    };

    populationRef.push(obj);
  };

  useEffect(() => {
    const rootRef = firebase.database().ref().child("Global");
    const populationRef = rootRef.child("population");
    populationRef.on("value", (snapshot) => {
      const value = [];
      const obj = snapshot.val();
      for (let id in obj) {
        value.push({
          title: obj[id]["category"],
          image:
            "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
          old_price: "$ " + obj[id]["prize"],
          newPrice: obj[id]["place"],
          alt: "batman",
          exp_date: obj[id]["status"],
          path: `/propiedad/${obj[id]["id"]}`,
        });
      }
      console.log(value);
      setData(value);
    });
  }, []);

  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center", marginTop: "90px" }}>
        Propiedades
      </h1>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((obj) => {
          return (
            <Link to={obj.path}>
              <Card
                title={obj.title}
                images={obj.image}
                old_price={obj.old_price}
                newPrice={obj.newPrice}
                alt={obj.alt}
                exp_date={obj.exp_date}
              ></Card>
            </Link>
          );
        })}
      </div>
      <form style={{ marginTop: "300vh" }} action="">
        <input
          type="text"
          name="property_id"
          placeholder="set the property ID"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
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
          type="text"
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
}
export default Propiedades;
