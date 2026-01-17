import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register"
import List from "./pages/List";

const router = createBrowserRouter(
[
    {  
        path: "/", // Ruta que se carga por defecto
        element: <Register /> 

    },
    {
        path: "/List", // Ruta del Dashboard
        element: <List />
    }
])

export default router;