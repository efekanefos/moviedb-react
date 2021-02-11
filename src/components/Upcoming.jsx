import React, { useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";


export default function Upcoming() {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=ed31b81064e7c617fa201d727de6c48c&language=en-US&page=1",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => {
        let abc =
          response.data.results;
        setMovies(abc);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 className="text-center pb-4" >Upcoming Movies</h1>
      <Container fluid >
        <Row className="pb-5"  >

          {movies.slice(0, 8).map((item, index) => {
            return (
              <Col key={index} xs={3} className="text-center pb-3" >
                <img src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`} alt="" />
                <h5>{item.title}</h5>
              </Col>
            )
          })}

        </Row>
      </Container>
    </>
  )
}