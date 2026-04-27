import axios from "axios";

//criar um endereço de api dentro do axios

const apiLocal = ""; //Colocar aqui o LocalHost do VhBurguer do backEnd 
const apiRemota = ""; 

export const api = axios.create
({
    baseURL: apiLocal
    
})