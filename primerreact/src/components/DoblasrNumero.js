// metodos
function DoblarNumeros(){
    const NumeroDoble =(numero)=>{
        numero = numero*2
        console.log(numero)
    }
    //ver como las variables en la pantalla no cambian
    let ejemplo = "Soy una variable";
    const CambiarVariable=()=>{
        console.log("Valor de antes "+ejemplo)
        ejemplo = "He cambiado mi valor"
        console.log("Valor despues "+ejemplo);
    }
    return(
        <div>
            <h1>Ejemplo metodos</h1>
            <button onClick={ () =>NumeroDoble(29)} value={29}>29</button>
            <button onClick={()=>NumeroDoble(90)}>90</button>
            <hr/>
            <h1>Ejemplo de Parameteos</h1>
            <h2>{ejemplo}</h2>
            <button onClick={()=>CambiarVariable()}>Cambiar Valor</button>
        </div>
    )
}
export default DoblarNumeros;