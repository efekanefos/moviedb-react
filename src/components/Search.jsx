import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/style.css";
function Search(props) {


    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed31b81064e7c617fa201d727de6c48c&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res) => res.json()).then(data => {
            if (!data.errors) {
                setResults(data.results);
            }
            else {
                setResults([]);
            }
        })
        console.log("aaa");
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <input type="text"
                        placeholder="Type and Let the Magic Happen ;)"
                        onChange={onChange}
                        value={query}
                        className="search"
                    />
                </Row>
                <Row className="text-center" >
                    {results.length > 0 && (
                        results.map((movie, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3} className="text-center pb-3" >
                                <Card className="card-panel mb-3">
                                    <div className="ml-2 map">
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                        <Card.Body  >
                                            <Card.Title className="text-width" >{movie.title}</Card.Title>
                                            <Link
                                                to={`/movies/${movie.id}`}
                                                className="btn btn-danger d-block mx-auto"
                                                id="readmore"
                                            >
                                                Read More
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>

    )
}

export default Search;