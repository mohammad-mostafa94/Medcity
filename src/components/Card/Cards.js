import React from "react";
import Card from "./Card";
import img1 from "../images/card/product01.png";
import img2 from "../images/card/product02.png";
import img3 from "../images/card/product03.png";

const cards = [
  {
    id: 1,
    title: "Card One",
    image: img1,
    url: "#",
  },
  {
    id: 2,
    title: "Card Two",
    image: img2,
    url: "#",
  },
  {
    id: 3,
    title: "Card Three",
    image: img3,
    url: "#",
  },
];

function Cards() {
  return (
    <>
      <h1 className="text-center">All Products</h1>
      <div className="container my-5 d-flex justify-content-center align-items-center h-100">

        <div className="row">
          {cards.map(({ title, image, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
