import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Card } from "react-bootstrap";
import "../../components/style.css";
import axios from 'axios';




function MovieDetail(props) {
  const params = useParams();
  const { movieID } = params;

  const [data, setData] = useState([]);
  const [overview, setOverview] = useState([]);
  const [title, setTitle] = useState([]);
  const [imagepath, setImagePath] = useState([]);

  fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=1907acf7c7b6bb2654f9595f4c550b1b&language=en-US\n`).
  then((res) => res.json()).
  then(data => {
    if (!data.errors) {
      setTitle(data.title);
      setData(data.id);
      setOverview(data.overview);
      setImagePath(data.poster_path);
      
    }
    else {
      setTitle([]);
      setOverview([]);
      setData([]);
      setImagePath([]);
    }
  })





  return (
    <div>

      <Container fluid>
        <nav aria-label="breadcrumb" className="mt-5 pt-3 pb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-white">
              <Link to="/">HomePage</Link>
            </li>
            <li className="breadcrumb-item text-white">
              <Link to="/search">Search</Link>
            </li>
            <li className="breadcrumb-item text-white">Read More</li>
          </ol>
        </nav>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={3}>
            <img className="detailimg"  src={`https://image.tmdb.org/t/p/w500${imagepath}`} alt=""/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={9}>
            <Card>
              <Card.Header as="h5">{title}</Card.Header>
              <Card.Body>
                <Card.Title><h1></h1></Card.Title>
                <Card.Text>
                  {overview}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieDetail;



/*
<h1>{data && data.title}</h1>
*/

/*
fetch("https://api.themoviedb.org/3/movie/12?api_key=1907acf7c7b6bb2654f9595f4c550b1b&language=en-US\n", requestOptions)
  .then(response => response.json())
  .then(json => setData(json))
  .catch(error => console.log('error', error));
*/

/*
fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=1907acf7c7b6bb2654f9595f4c550b1b&language=en-US
  `).then((response) => response.json())
    .then((json) => setData(json))
    .catch((err) => console.error(err));
*/