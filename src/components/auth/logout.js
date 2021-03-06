import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    )
  );
};

export default Logout;