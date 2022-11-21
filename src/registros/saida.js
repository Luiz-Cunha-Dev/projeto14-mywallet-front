import React from "react"
import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Saida({token}){
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

    function salvarSaida(){
        if(value !== "" && title !== ""){
            const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/registro"
            axios.post(URL,{value: -value, title, date: data}, config)
            .then(res => {
                navigate("/registro")
            })
            .catch(err => {
                alert(err.response.data)
            })
        }
    }

    return(
        <PaginaSaida>
            <h1>Nova saída</h1>
            <form>
                <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="text" placeholder="Descrição" value={title} onChange={e => setTitle(e.target.value)} />
            </form>
            <button onClick={salvarSaida}>Salvar saída</button>
        </PaginaSaida>
    )
}

const PaginaSaida = styled.div`
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
    margin-left: -185px;
    margin-bottom: 40px;
}
input{
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    border: thin;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
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