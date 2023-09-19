import React from "react";
import "../styles/components/card.scss";

function Card({ data }) {
  const { url, tags } = data;

  return (
    <>
      <div className="box">
        <img className="pics" src={url} alt="Image" />
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;