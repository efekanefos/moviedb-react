import React from "react";
import { Link } from "react-router-dom";
import "../moviefiles/CardStyle.css";

function MovieCard(props) {
  return (
    <div id="card" className="card mb-3 d-block mx-auto">
      <img
        id="cardImg"
        src={props.imgsrc}
        className="card-img-top p-0 m-0"
        alt="..."
      />
      <div id="cardBody" className="card-body">
        <h5 id="cardtitle" className="card-title text-white text-center">
          {props.title}
        </h5>
        <p id="cardparag" className="card-text text-white text-center">
          {props.description}
        </p>
        <Link
          to={`/movies/${props.id}`}
          className="btn btn-danger d-block mx-auto"
          id="readmore"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;