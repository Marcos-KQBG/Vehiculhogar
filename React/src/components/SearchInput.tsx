interface InputData {
    placeholder: string;
    type: string;
}

function SearchInput({placeholder, type}: InputData) { 
 
    return <input className="bg-[#D9D9D9]" type={type} placeholder={placeholder}/>;
}            

export default SearchInput;