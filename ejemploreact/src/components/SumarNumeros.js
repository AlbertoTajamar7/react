import tatto2 from './../assets/images/tatto2.jpg'
function SumarNumeros(props){

    const operacion=(numero1,numero2)=>{
        let total= parseInt(props.numero1)+parseInt(props.numero2);
       console.log(total)
    }
    return(<div>
        <h1>Sumar Numeros</h1>
        <img src={tatto2}/>
        <button onClick={()=>operacion()}>24 y 6</button>
        <button onClick={()=>operacion()}>546 y 345</button>
    </div>)
}export default SumarNumeros;