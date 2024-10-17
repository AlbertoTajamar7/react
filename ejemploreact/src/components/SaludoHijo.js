function SaludoHijo(props) { 

     //CAPTURAMOS EN UNA VARIABLE EL METODO DEL PARENT 
    //QUE VIENE EN PROPS 
    let ejecutarPadre = props.metodoPadre; 
    let idhijo = props.idehijo;

    return (<div> 
        <h1 style={{color:"blue"}}>Saludo HIJO</h1> 
        <button onClick={ () => ejecutarPadre("luke"+ idhijo) }>Llamar al Parent</button> 
        </div>) 
    } 
    export default SaludoHijo;