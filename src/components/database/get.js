import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { dataBase } from "./config";

const Get = props => {

    var card = props.state
    var Key = Math.random; 
    const [isOpen1, setIsOpen1] = useState(false)
    const [index, setIndex] = useState(0);

    return (
        <div>
            <Wrapper>
                {card.map(doc => {
                    return (
                        <Card key={Key} onClick={() => {
                            setIsOpen1(true)
                            setIndex(card.indexOf(doc));
                        }}>
                            <div className="Picture">
                                <img src="#" alt="" />
                            </div>
                            <div>
                                <h1>{doc.name}</h1>
                                <h3>{doc.type}</h3>
                            </div>
                        </Card>
                    )
                })}
            </Wrapper>
            <ReactModal isOpen={isOpen1} onRequestClose={() => setIsOpen1(false)} style={{
                overlay: {
                    backgroundColor: "rgba(15, 15, 15, 0.5)",
                },
                content: {
                    transition: "333ms",
                    margin: "auto",
                    backgroundColor: "rgb(0, 0, 0)",
                    border: "none",
                    color: "rgb(255, 255, 255)",
                    minWidth: "300px",
                    maxWidth: "50vw"
                }
                }} >
                <Close onClick={() => setIsOpen1(false)}>x</Close>
                <Modal>
                    <section>
                        <h1>"{card[index].name}"</h1>
                        <h5>{card[index].type}</h5>
                    </section>
                    <div>
                        <h2>¿Como se prepara?</h2>
                        <textarea value={card[index].description} readOnly />
                    </div>
                </Modal>
            </ReactModal>
        </div>
    );
};

const Modal = styled.div`
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    section {
        height: fit-content;

        h1 {
        text-align: center;
        font-size: 50px;
        margin: 0;
        }

        h5 {
            margin: 0;
            text-align: center;
            color: rgb(200, 200, 200);
        }
    }

    div {
        height: 100%;

        textarea {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            resize: none;
            height: 100%;
            width: 100%;
            outline: none;
            background-color: rgb(20, 20, 20);
            border: none;
            font-size: 20px;
            padding: 10px;
            border-radius: 10px;
            color: rgb(255, 255, 255);
        }
    }
`;

const Wrapper = styled.div`
    width: 100%;
    background-color: transparent;
    display: flex;
    padding: 20px;
    padding-bottom: 60px;
    overflow-x: auto;
    height: auto;
    gap: 20px;

    &::-webkit-scrollbar {
        background-color: transparent;
        height: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(100, 100, 100);
        border-radius: 10px;
    }
`;

const Card = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    background-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    border-radius: 10px;
    min-width: 350px;
    max-width: 350px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    transition: 333ms;
    cursor: pointer;
    box-shadow: 0px 10px 20px rgb(100, 100, 100);

    &:hover{
        transform: translateY(-10px);
    }

    button {
        background-color: rgb(100, 100, 100);
        border: none;
        padding: 10px;
        color: rgb(255, 255, 255);
        border-radius: 5px;
    }

    div {
        height: 30%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        h1 {
            color: rgb(255, 255, 255);
            margin: 0;
        }

        h3 {
            margin: 0;
            font-family: 'Roboto Mono', monospace;
            color: rgb(100, 100, 100);
        }

        p {

            color: rgb(255, 255, 255);
        }
    }

    .Picture {
        background-color: transparent;
        border: solid 2px rgb(100, 100, 100);
        height: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Close = styled.button`
    background-color: rgb(20, 20, 20);
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 333ms;

    &:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }
`; 

export default Get;