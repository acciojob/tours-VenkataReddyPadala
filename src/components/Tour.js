import React, { useState } from "react";

function Tour({ id, image, info, price, name, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="tour-img" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="btn-show"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "See less" : "Show more"}
          </button>
        </p>
        <button className="btn-remove" onClick={() => removeTour(id)}>
          Remove
        </button>
      </footer>
    </article>
  );
}

export default Tour;
