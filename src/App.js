import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PopularMovies from "./components/PopularMovies";

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
                <Route path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
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
