import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(7, 0, 0),
    fontFamily: "Lato",
    textAlign: "center",
    fontSize: "40px",
    color: "#f53b57",
    textShadow: "1px 1px darkmagenta",
  },
}));

function Propiedades() {
  const [data, setData] = useState([]);
  const styles = useStyles();

  useEffect(() => {
    const rootRef = firebase.database().ref().child("Global");
    const populationRef = rootRef.child("population");
    populationRef.on("value", (snapshot) => {
      const value = [];
      const obj = snapshot.val();
      for (let id in obj) {
        value.push({
          tipoDePropiedad: obj[id]["tipoDePropiedad"],
          image:
            "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
          PrecioDeLaPropiedad: "$ " + obj[id]["PrecioDeLaPropiedad"],
          ubicacionDeLaPropiedad: obj[id]["ubicacionDeLaPropiedad"],
          alt: "batman",
          tipoDeOferta: obj[id]["tipoDeOferta"],
          path: `/propiedad/${obj[id]["ID"]}`,
          TotalDeBaños: obj[id]["TotalDeBaños"],
          cajonesDeEstacionamiento: obj[id]["cajonesDeEstacionamiento"],
          bañosCompletos: obj[id]["bañosCompletos"],
          recamaras: obj[id]["recamaras"],
        });
      }
      console.log(value);
      setData(value);
    });
  }, []);

  return (
    <div>
      <Typography className={styles.root} component="h1">
        PROMOBILIA
      </Typography>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((obj) => {
          return (
            <Link to={obj.path}>
              <Card
                tipoDePropiedad={obj.tipoDePropiedad}
                images={obj.image}
                PrecioDeLaPropiedad={obj.PrecioDeLaPropiedad}
                ubicacionDeLaPropiedad={obj.ubicacionDeLaPropiedad}
                alt={obj.alt}
                tipoDeOferta={obj.tipoDeOferta}
                cajonesDeEstacionamiento={obj.cajonesDeEstacionamiento}
                TotalDeBaños={obj.TotalDeBaños}
                bañosCompletos={obj.bañosCompletos}
                recamaras={obj.recamaras}
              ></Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Propiedades;
