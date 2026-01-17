interface InputData {
    placeholder: string;
    type: string;
    required : boolean;
    onChange: (value: string) => void;

}

function RegisterInput({ placeholder, type, required, onChange }: InputData) {
    return (
        <input
            onChange={(e) => onChange(e.target.value)}
            className="w-full md:w-110 bg-[#D9D9D9]"
            type={type}
            placeholder={placeholder}
            required={required}
        />
    );
}

export default RegisterInput;
