import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import firebase from "../firebase";

function Propiedades() {
  const [data, setData] = useState([]);

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
          bathrooms: obj[id]["bathrooms"],
          cars: obj[id]["cars"],
          showers: obj[id]["showers"],
          bedrooms: obj[id]["bedrooms"],
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
                cars={obj.cars}
                bathrooms={obj.bathrooms}
                showers={obj.showers}
                bedrooms={obj.bedrooms}
              ></Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Propiedades;
