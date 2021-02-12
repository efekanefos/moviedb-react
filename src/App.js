import React from "react";
import Upcoming from "./components/Upcoming";
import NowPlaying from "./components/NowPlaying";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PopularMovies from "./components/PopularMovies";
import Search from "./components/Search";
import MovieDetail from "./components/Movies/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/">
                  <PopularMovies />
                </Route>
                <Route path="/upcoming">
                  <Upcoming />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/movies/:movieID">
                  <MovieDetail />
                </Route>
                <Route exact path="/nowplaying">
                  <NowPlaying />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
