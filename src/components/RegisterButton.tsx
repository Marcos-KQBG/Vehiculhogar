function RegisterButton({text, onClick}:{text:string, onClick: () => void}) {

    return <button onClick={onClick} className="bg-[#E62702] p-4 pl-6 pr-6 font-roboto text-15 font-bold shadow-lg hover:bg-[#992C2A] border border-black" >{text}</button>;
    
}

export default RegisterButton;