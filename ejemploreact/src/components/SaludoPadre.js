import SaludoHijo from "./SaludoHijo"; 

function SaludoPadre() { 
    //NECESITAMOS UN METODO EN ESTE CODIGO PARA  
    //QUE EL HIJO SEA CAPAZ DE EJECUTARLO 
    const metodoPadre = (nombre) => { 
        console.log("Yo soy tu padre,"+ nombre); 
  } 
  return (<div> 
    <h1 style={{color:"red"}}>Saludo Padre </h1> 
    {/* DESDE PROPS ENVIAREMOS EL METODO DEL PARENT 
        PARA QUE EL HIJO PUEDA REALIZAR LA LLAMADA */} 
    <SaludoHijo idehijo="1" metodoPadre={metodoPadre}/>
    <SaludoHijo idehijo="2" metodoPadre={metodoPadre}/> 
    <SaludoHijo idehijo="3" metodoPadre={metodoPadre}/> 
  </div>) 

} 

export default SaludoPadre; 