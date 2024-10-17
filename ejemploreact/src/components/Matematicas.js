function Matematicas (props){
    const {numero,metodoPadre} = props
    const duplicar =(num1)=>{
        num1 = num1*2
        console.log(num1)
    }
    return(
        <div>
            <h1>Matematicas Hijo</h1>
            <button onClick={()=>duplicar(numero)}>{numero}</button>
            <button onClick={()=>metodoPadre(numero)}>{numero}</button>
        </div>
    );
}
export default Matematicas;