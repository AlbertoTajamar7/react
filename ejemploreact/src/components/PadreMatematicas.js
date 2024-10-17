import Matematicas from './Matematicas'
function PadreMatematicas(){
    const triplicar =(numero)=>{
        numero = numero*3
        console.log(numero)
    }
    return(
        <div>
            <Matematicas numero="43" metodoPadre={triplicar}/>
            <Matematicas numero="231" metodoPadre={triplicar}/>
        </div>
    )
}export default PadreMatematicas;