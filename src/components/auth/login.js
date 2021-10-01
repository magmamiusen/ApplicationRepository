import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>
        <img src="/userNotLoged.svg" />
        <h1>Invitado</h1>
      </Button>
    )
  );
};

const Button = styled.button`
  border: none;
  background-color: rgb(0, 0, 0);
  width: fit-content;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding-left: 30px;
  padding-right: 30px;
  gap: 15px;
  box-shadow: 0px 10px 20px rgb(100, 100, 100);
  cursor: pointer;

  img {
    width: 40px;
  }
`;

export default Login;