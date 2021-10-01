import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Logout from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (  
        <Wrapper>
          <img src={user.picture} alt={user.name} />
          <div>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
          <Logout />
        </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
    border: solid 10px rgb(0, 0, 0);
    border-radius: 50%;
  }

  h2 {
    font-size: 50px;
    margin: 0;
    color: rgb(0, 0, 0);
  }

  h3 {
    color: rgb(80, 80, 80);
  }

  button {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: none;
    padding: 10px;
    width: 130px;
    border-radius: 5px;
    transition: 333ms;

    &:active {
      transform: scale(1.02);
    }
  }

  @media ( max-width: 700px ){
    img {
      width: 100px;
      height: 100px;
      border: solid 10px rgb(0, 0, 0);
      border-radius: 50%;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 15px;
    }
  }
`;

export default Profile;