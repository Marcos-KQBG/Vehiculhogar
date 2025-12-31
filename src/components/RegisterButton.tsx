function RegisterButton({text, onClick, type = "button", form}:{text:string, onClick?: () => void, type?: "button" | "submit" | "reset", form?: string}) {

    return <button type={type} onClick={onClick} form={form} className="bg-[#E62702] p-4 pl-6 pr-6 font-roboto text-15 font-bold shadow-lg hover:bg-[#992C2A] border border-black" >{text}</button>;
    
}

export default RegisterButton;