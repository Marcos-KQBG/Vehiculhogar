interface InputData {
    placeholder: string;
    type: string;
}

function RegisterInput({placeholder, type}: InputData) { 
 
    return <input className="w-110 bg-[#D9D9D9]" type={type} placeholder={placeholder}/>;
}            

export default RegisterInput;