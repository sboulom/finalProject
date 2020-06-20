import React, { useState } from "react";
import {
  Container,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./SignIn.css";
import API from "../utils/API";

const SignIn = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    console.log("state.username", state.username);
    console.log("state.password", state.password);
    const userData = {
      username: state.username,
      password: state.password,
    };
    API.login(userData)
      .then((results) => {
        console.log("log in success!");
        console.log(results);
        console.log(props);
        props.history.push("/custom");
        // window.location.href = "/userprofile";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="signInWrapper">
      <div>
        <Card className="whiteSpace">
          <Card.Body className="cardArea">
            <Card.Title>Sign In</Card.Title>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="User Name"
                aria-label="User Name"
                aria-describedby="basic-addon1"
                name="username"
                value={state.username}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </InputGroup>
            <Button variant="outline-secondary" onClick={handleSubmit}>
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SignIn;
