import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { dataBase } from "./config";

const Add = () => {
    const [data, setData] = useState({
        name: "",
        type: "",
        description: ""
    })

    const change = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    } 

    const click = async event => {
        event.preventDefault()

        try {
            const docRef = await addDoc(collection(dataBase, "recipe"), {
                name: data.name,
                type: data.type,
                description: data.description,
                date: new Date
            });
        } catch (error) {
            console.log("An error has occurred + " + error);
        };

    };

    return (
        <Wrapper>
            <h1>
                Agrega Una Nueva Receta
            </h1>
            <form>
                <label>Nombra tu receta</label>
                <input type="text" name="name" onChange={change} placeholder="Nombre de Tu Receta" required />
                <label>¿Como se hace tu receta?</label>
                <textarea onChange={change} name="description" placeholder="Paso 1..." required />
                <label>¿De que tipo es tu receta?</label>
                <input type="text" name="type" onChange={change} placeholder="Vegetariana, Parrilla, Reposteria ..." required />
                <h4>Para ver la receta debes recargar la pagina</h4>
                <input onClick={click} type="submit" value="Agregar" className="submit" />
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: transparent;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    form {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        .submit {
            background-color: rgb(0, 0, 0);
            border: none;
            color: rgb(255, 255, 255);
            padding: 10px;
            width: 130px;
            border-radius: 5
            px;
            font-weight: bold;
            transition: 333ms;

            &:active {
                transform: scale(1.02);
            }
        }

        h4 {
            text-align: left;
            width: 100%;
            color: rgb(80, 80, 80);
            font-style: italic;
        }

        label {
            font-size: 20px;
            font-weight: bold;
        }

        input {
            width: 100%;
            outline: none;
            background-color: rgb(200, 200, 200);
            border: none;
            font-size: 20px;
            padding: 10px;
            border-radius: 10px;
            color: rgb(0, 0, 0);
        }

        textarea {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            resize: none;
            height: 40vh;
            width: 100%;
            outline: none;
            background-color: rgb(200, 200, 200);
            border: none;
            font-size: 20px;
            padding: 10px;
            border-radius: 10px;
        }
    }
    
    h1 {
        font-size: 50px;
    }
`;

export default Add;