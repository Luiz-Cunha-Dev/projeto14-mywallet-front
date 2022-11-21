import React from "react"
import styled from "styled-components"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Entrada({token}){
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    };
    const currentDate = new Date();
    const data= currentDate.toLocaleDateString().slice(0,5);

    function salvarEntrada(){
        if(value !== "" && title !== ""){
            const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/registro"
            axios.post(URL,{value, title, date: data}, config)
            .then(res => {
                console.log(res);
                navigate("/registro")
            })
            .catch(err => {
                console.log(value);
                console.log(err);
            })
        }
    }

    return(
        <PaginaEntrada>
            <h1>Nova entrada</h1>
            <form>
                <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="text" placeholder="Descrição" value={title} onChange={e => setTitle(e.target.value)}/>
            </form>
            <button onClick={salvarEntrada}>Salvar entrada</button>
        </PaginaEntrada>
    )
}

const PaginaEntrada = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-left: -155px;
    margin-bottom: 40px;
}
input{
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    border: thin;
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 15px;
    }
}
button{
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    margin-bottom:36px;
    border: thin;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
}
`