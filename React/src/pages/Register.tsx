import DivBody from "../components/DivBody";
import DivUpperMenuRegister from "../components/DivUpperMenuRegister";
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <DivUpperMenuRegister />    
            <DivBody />
            <h1>Registro de Vehículos</h1>
            <Link to ="/List">Ir a Lista</Link>


        </>
    )
}

export default Register;