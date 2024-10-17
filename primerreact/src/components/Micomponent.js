function Saludo(props){
    // al poner props en la funcion le estamos diciendo que va a recibir datos
    // en este caso recibe nombre de la pagina index
    // para recogerlo senhacer de la siguiente manera props.nombre que hallamos utilizado
  //  let nombre = props.nombre
  //  let edad = props.edad
    //podemos cantar estos props a la misma vez usando
    const {nombre, edad} = props
    const mostrarMensaje = () =>{
        console.log("has pulsado el boton")
    }
    return(
        <div>
            <h1>React en juernes</h1>
            <p>Otro mensaje por aqui</p>
            <p>Hola {nombre} soy un prop</p>
            <p>Tengo {edad} años</p>
            <button onClick={()=>mostrarMensaje()}>Pulsar!!!</button>
            {mostrarMensaje()}
        </div>
        
    )
} export default Saludo;