import React from "react";
//
//IMPORT HERE STYLING COMPONENTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap-col";
//
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Recipies from "../pages/Recipies";
import About from "../pages/About";

const Main = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col></Col>
        <Col xs={6}>
          <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/recipies" component={Recipies} />
            <Route path="/about" component={About} />
          </Switch>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Main;