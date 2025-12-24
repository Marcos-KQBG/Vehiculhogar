import { useState } from "react";

function UseRegisterForm() {

     const [users, setUsers] = useState<any[]>([]);
    
        const [formData, setFormData] = useState({
            username: "",
            password: "",
            telephone: "",
            email: "",
            dni: ""
        });
    
        const handleInput = (field: string, value: string) => {
            setFormData(prev => ({ ...prev, [field]: value }));
        };
    
        const handleRegister = () => {
            setUsers(prev => [...prev, formData]);
            console.log("Usuarios guardados:", users);
        };
    
        console.log("Datos guardados:", formData);

        return {
            
            handleInput,
            handleRegister
            
        }
    
}
export default UseRegisterForm;