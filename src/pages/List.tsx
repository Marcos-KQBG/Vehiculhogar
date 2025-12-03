import { Link } from "react-router-dom";
import DivUpperMenu from "../components/DivUpperMenu";
import DivBodyList from "../components/DivBodyList";
import DivFooter from "../components/DivFooter";

function List() {
    return(
        <>

                <DivUpperMenu />
                <DivBodyList />
                <DivFooter />
            
            

            <h1>Lista de Vehículos</h1>
            <Link to ="/">Ir a Registro</Link>
        </>
    );
}

export default List;