import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import "./styles.css";
import Alert from "./Alert/Alert";
import { createAlert } from "./Alert/AlertSlice";
// import happyImage from "./illustrations/happy.svg";

const Button = styled.button`
  width: 8rem;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  color: white;
  border: none;
  height: 3rem;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem 1rem 1rem;
  &.success {
    background: teal;
  }
  &.error {
    background: tomato;
  }
`;

const Img = styled.img`
  margin-top: 6rem;
`;

export default function App() {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch(
      createAlert({
        message: "We are off to a good start! 🤗",
        type: "success",
      })
    );
  };
  const onError = () => {
    dispatch(
      createAlert({
        message: "Something went wrong! 😩",
        type: "error",
      })
    );
  };
  return (
    <>
      <Alert />
      <div className="App">
        {/* <Img src={happyImage} alt="happy people jumping" height="80" /> */}
        <h1>Notification Component</h1>
        <h2>
          Notification Component with redux-toolkit and styled-components!
        </h2>
        <p>
          This is a demonstration of building a react notification component
          using redux-toolkit and styled-components in react.
          <br />
          <br />
          Click a button below to show notification.
        </p>
        <div>
          <Button className="success" onClick={onSuccess}>
            Success
          </Button>
          <Button className="error" onClick={onError}>
            Error
          </Button>
        </div>
      </div>
    </>
  );
}
