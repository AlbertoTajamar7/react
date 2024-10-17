import { useState } from "react"; 

function Car(props) { 

    //VAMOS A CREAR UNA VARIABLE QUE NOS PERMITIRA  

    //VISUALIZAR EL ESTADO DEL COCHE 

    const [estado, setEstado] = useState(false); 

    //VAMOS A TENER UNA VARIABLE PARA VISUALIZAR LA VELOCIDAD ACTUAL DEL  

    //COCHE 

    const [velocidad, setVelocidad] = useState(0); 

    //CREAMOS UN OBJETO CUYAS PROPIEDADES VENDRAN DEFINIDAS EN  

    //LA ETIQUETA DEL PARENT 

    var coche = { 

        marca: props.marca, 

        modelo: props.modelo, 

        velocidadMaxima: parseInt(props.velocidadmaxima), 

        aceleracion: parseInt(props.aceleracion) 

    } 

    //INCLUIMOS UN METODO PARA COMPROBAR EL ESTADO DEL COCHE 

    //DEPENDIENDO DE DICHO ESTADO, LO QUE HAREMOS SERA DEVOLVER CODIGO 

    //HTML 

    const comprobarEstado = () => { 

        if (estado == true){ 

            return (<h1 style={{color: "green"}}>Arrancado</h1>) 

        }else{ 

            return (<h1 style={{color: "red"}}>Detenido</h1>) 

        } 

    } 

    //CREAMOS UN METODO PARA CAMBIAR LA ACELERACION DEL COCHE 

    const acelerarCoche = () => { 

        if (estado == false){ 

            alert("El coche esta detenido"); 

            setVelocidad(0); 

        }else{ 

            if (velocidad >= coche.velocidadMaxima){ 

                //PONEMOS LA VELOCIDAD MAXIMA 

                setVelocidad(coche.velocidadMaxima); 

            }else{ 

                //CAMBIAMOS LA VELOCIDAD JUNTO A SU ACELERACION 

                setVelocidad(velocidad + coche.aceleracion); 

            } 

        } 

    } 

    return (<div> 

        <h1 style={{color:"blue"}}> 

            Component Car: {coche.marca}, {coche.modelo} 

        </h1> 

        <h2 style={{color:"fuchsia"}}> 

            Velocidad actual: {velocidad} km/h 

        </h2> 

        <div> 

            {comprobarEstado()} 

        </div> 

        <button onClick={ () => { 

            //MODIFICAR EL ESTADO 

            setEstado(!estado); 

        }}> 

            Arrancar/Detener 

        </button> 

        <button onClick={ () => acelerarCoche()}> 

            Acelerar coche 

        </button> 

    </div>) 

} 

export default Car; 