import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Profile from "./Profile";

const State = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div></div>;
    }

    return (
        isAuthenticated && (  
            <Wrapper onClick={() => setIsOpen(true)}>
                <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={{
                    overlay: {
                        backgroundColor: "rgba(15, 15, 15, 0.5)",
                    },
                    content: {
                        transition: "333ms",
                        margin: "auto",
                        backgroundColor: "rgb(255, 255, 255)",
                        border: "none",
                        color: "rgb(0, 0, 0)",
                        minWidth: "300px",
                        maxWidth: "50vw",
                        height: "auto"
                    }
                }} >
                    <Close onClick={() => setIsOpen(false)} >x</Close>
                    <Profile />
                </ReactModal>
                <img src={user.picture} alt={user.name} />
                <h5>{user.name}</h5>
            </Wrapper>
        )
    );
};

const Wrapper = styled.button`
    outline: none;
    border: none;
    background-color: rgb(0, 0, 0);
    width: fit-content;
    display: flex;
    padding: 5px;
    padding-right: 20px;
    padding-left: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgb(200, 200, 200);
    border-radius: 50px;
    box-sizing: border-box;
    box-shadow: 0px 10px 20px rgb(100, 100, 100);
    cursor: pointer;
    transition: 333ms;
    gap: 10px;

    &:hover {
        transform: scale(1.1);
    }

    h5 {
        width: fit-content;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 2px rgb(255, 255, 255);
    }
`;

const Close = styled.button`
    background-color: rgb(200, 200, 200);
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 333ms;

    &:hover {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
    }
`; 

export default State;