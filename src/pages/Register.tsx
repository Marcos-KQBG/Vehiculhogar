import DivBody from "../components/DivBody";
import DivUpperMenu from "../components/DivUpperMenu";
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <DivUpperMenu />    
            <DivBody />
            <h1>Registro de Vehículos</h1>
            <Link to ="/List">Ir a Lista</Link>

        </>
    )
}

export default Register;