import React from "react";
import "./App.css";
import Card from "./Card";

function Propiedades() {
  const data = [
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
    {
      title: "Loft",
      image: "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
      old_price: "$ 90,000",
      newPrice: "México, Quintanta Roo",
      alt: "batman",
      exp_date: "Renta",
    },
  ];

  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center", marginTop: "90px" }}>
        Propiedades
      </h1>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((obj) => {
          return (
            <Card
              title={obj.title}
              images={obj.image}
              old_price={obj.old_price}
              newPrice={obj.newPrice}
              alt={obj.alt}
              exp_date={obj.exp_date}
              onClick={console.log(20)}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Propiedades;
