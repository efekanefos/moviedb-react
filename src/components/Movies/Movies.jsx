import React, { useEffect } from "react";
import movieData from "../../data/movieData.json";
import MovieCard from "./MovieCard";
import Search from "../Search";
import "../moviefiles/CardStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Movies(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const cardItems = movieData.moviedata
    .filter(item => item.isActive)
    .map(item => (
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={item.id}>
        <MovieCard
          id={item.id}
          description={item.description}
          title={item.title}
          imgsrc={item.imgsrc}
          longDescription={item.longDescription}
        />
      </div>
    ));
  return (
    <div id="backg">
      <h1
        id="moviepagetitle"
        data-aos="fade-down"
        className="text-center text-white pt-5 "
      >
        All Of The Movies
      </h1>
      <Search />
      <div id="carditems" data-aos="zoom-in" className="row">
        {cardItems}
      </div>
    </div>
  );
}

export default Movies;