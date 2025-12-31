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
    
        const handleRegister = (e: React.FormEvent) => {
            e.preventDefault();
            
            setUsers(prev => [...prev, formData]);
            setFormData({
                username: "",
                password: "",
                telephone: "",
                email: "",
                dni: ""
            });
            console.log("Usuarios guardados:", [...users, formData]);
        };
    
        

        return {
            
            handleInput,
            handleRegister
            
        }
    
}
export default UseRegisterForm;