interface InputData {
    placeholder: string;
    type: string;
    onChange: (value: string) => void;
}

function RegisterInput({ placeholder, type, onChange }: InputData) {
    return (
        <input
            onChange={(e) => onChange(e.target.value)}
            className="w-full md:w-110 bg-[#D9D9D9]"
            type={type}
            placeholder={placeholder}
        />
    );
}

export default RegisterInput;
