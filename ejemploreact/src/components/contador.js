//PARA PODER UTILIZAR useState DEBEMOS HACER  
//UN IMPORT DE react 
import { useState } from "react"; 

function Contador() { 
     //DECLARAMOS UNA VARIABLE DE TIPO STATE Y  
     //EN LA CREACION LE INDICAMOS EL TIPO DE DATO 
     const [ numero, setNumero ] = useState(0); 
     const sumarContador = () => { 
         //PARA MODIFICAR EL VALOR DE UNA VARIABLE DE TIPO 
         //STATE, SE UTILIZA setVariable();    
        setNumero(numero + 1); 
    } 
    return (
        <div>  
            <h1 style={{color:"blue"}}>Ejemplo Contador State </h1> 
            <h2 style={{color:"red"}}>Contador {numero}</h2> 
            <button onClick={ () => sumarContador() }>Sumar contador</button> 
            <button onClick={ () => {setNumero(numero - 1)}}>Restar contador</button> 
        </div>) 
} 
export default Contador; 