import Add from "../components/database/add";
import Get from "../components/database/get";
import Head from "next/head";
import styled from "styled-components";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "../components/auth/Profile";
import Logout from "../components/auth/logout";
import State from "../components/auth/state";
import Login from "../components/auth/login";
import { useState } from "react";
import ReactModal from "react-modal";
import Link from "next/link"
import { dataBase } from "../components/database/config";
import { collection, getDocs } from "firebase/firestore";

const Feed = () => {
    const [isOpen, setIsOpen]   = useState(false);
    const [card, setCard] = useState([{name: "Receta", type: "Pastel"},]);
    
    const load = async () => {
        console.log("loaded");
        const querySnapshot = await getDocs(collection(dataBase, "recipe"));

        querySnapshot.forEach(doc => {
          setCard( card => [...card, doc.data()])
        });
    }

    return (
        <Auth0Provider domain="dev-dou8wmxc.us.auth0.com" clientId="PXWrsxQUkGUjzxYg7FNUjHOuYVWw6ar8" redirectUri="http://recepy.vercel.app/" >
            <div onLoad={load} >
                <Head>
                    <title>Feed</title>
                    <meta name="description" content="Feed page from the application" />
                    <link rel="icon" href="/logo.png" />
                </Head>
                <div>
                    <Nav>
                        <img src="/logo.png" alt="logo" />
                        <div>
                            <button onClick={() => setIsOpen(true)} className="plus" >+</button>
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
                                    maxWidth: "50vw"
                                }
                            }} >
                                <Close onClick={() => setIsOpen(false)}>x</Close>
                                <div>
                                    <Add />
                                </div>
                            </ReactModal>
                            <State />
                            <Login />
                        </div>
                    </Nav>
                    <div>
                    </div>    
                    <Get state={card} />
                </div>
                <Footer>
                    <div>
                        <p>Recepy es un proyecto de estudiantes, en este proyecto se practican conceptos como la Base de Datos y la gestion de Usuraios</p>
                        <br />
                        <p>En este proyecto se usaron tecnologias como NextJs, Firebase, GitHub, Vercel, Auth0 y Git</p>
                    </div>
                    <section>
                            <a href="https://git-scm.com/" target="_blank" >
                                <img src="/git.png" />
                            </a>
                            <a href="https://firebase.google.com/" target="_blank" >
                                <img src="/firebase.png" />
                            </a>
                            <a href="https://nextjs.org/" target="_blank" >
                                <img src="/nextJs.svg" />
                            </a>
                            <a href="https://auth0.com/" target="_blank" >
                                <img src="/auth0.png" />
                            </a>
                            <a href="https://vercel.com/" target="_blank" >
                                <img src="/favicon.ico" />
                            </a>
                            <a href="https://github.com/" target="_blank" >
                                <img src="/gitHub.png" />
                            </a>
                    </section>
                    <div>
                        <p>Si quieres enviar alguna sugerencia o queja sobre la aplicacion, lo puedes hacer al siguiente correo : </p>
                        <a href="https://mail.google.com/" target="_blank" >proyectzena@gmail.com</a>
                    </div>
                </Footer>
            </div>
        </Auth0Provider>         
    );
};

const Nav = styled.div`
    background-color: transparent;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    div {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .plus {
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
        border: 0;
        box-shadow: 0px 10px 20px rgb(100, 100, 100);
        transition: 333ms;
        font-weight: bold;
        font-size: 40px;
        cursor: pointer;

        &:hover {
            background-color: rgb(20, 20, 20);
        }
    }
`;

const Close = styled.button`
    background-color: rgb(200, 200, 200);
    color: rgb(0, 0, 0);
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
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
    }
`; 

const Footer = styled.footer`
    background-color: rgb(0, 0, 0);
    height: auto;
    padding: 20px;
    text-align: center;
    color: rgb(200, 200, 200);
    display: flex;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    p {
        margin: 0;
    }

    div {
        width: 50%;

        a {
            font-weight: bold;
        }
    }

    section {
        display: flex;
        align-items: center;
        gap: 20px;
        background-color: transparent;

        img {
            width: 50px;
            border-radius: 5px;
            padding: 10px;
            background-color: rgb(255, 255, 255);
            transition: 333ms;

            &:hover {
                transform: scale(1.1);
                background-color: rgb(200, 200, 200);
            }
        }
    }
`;

export default Feed;