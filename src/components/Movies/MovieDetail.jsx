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
  const [vote, setVote] = useState([]);
  const [date, setDate] = useState([]);
  const [budget, setBudget] = useState([]);

  fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=1907acf7c7b6bb2654f9595f4c550b1b&language=en-US\n`).
    then((res) => res.json()).
    then(data => {
      if (!data.errors) {
        setTitle(data.title);
        setData(data.id);
        setOverview(data.overview);
        setImagePath(data.poster_path);
        setVote(data.vote_average);
        setDate(data.release_date);
        setBudget(data.budget);

      }
      else {
        setTitle([]);
        setOverview([]);
        setData([]);
        setImagePath([]);
        setVote([]);
        setDate([]);
        setBudget([]);

      }
    })

  return (
    <div>
      <Container fluid>
        <nav aria-label="breadcrumb" className="pt-5">
          <ol className="breadcrumb bg-dark">
            <li className="breadcrumb-item ">
              <Link className="text-white" to="/">HomePage</Link>
            </li>
            <li className="breadcrumb-item text-white">
              <Link className="text-white" to="/search">Search</Link>
            </li>
            <li  className="breadcrumb-item text-danger">Read More</li>
          </ol>
        </nav>
        <Row className="colstyle">
          <Col xs={12} sm={12} md={6} lg={6} xl={3}  >
            <img className="detailimg" src={`https://image.tmdb.org/t/p/w500${imagepath}`} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={9}>
            <Card className="bg-dark" >
              <Card.Header className="text-white" as="h3">{title}</Card.Header>
              <Card.Body>
                <Card.Title><h5 className="text-white">Rating: {vote}</h5></Card.Title>
                <Card.Title><h5 className="text-white">Release Date: {date}</h5></Card.Title>
                <Card.Title><h5 className="text-white">Total Budget: {budget}</h5></Card.Title>
                <Card.Text className="text-white">
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
