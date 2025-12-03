function UpperSelector({text}: {text: string}) {

    const registers = [
        { id: 1, value: 'Vehiculos'},
        { id: 2, value: 'Inventario'},
        { id: 3, value: 'Clientes'},
        { id: 4, value: 'Citas'},

    ]

    return (
        <select className="text-[#FFFFFF] font-roboto text-15 font-bold hover:text-[#A8A8A8]">
            
            <option value="" disabled selected>{text}</option>
            {registers.map(register => (
                <option key={register.id} value={register.value}>{register.value}</option>
            ))}
        </select>
    );


}

export default UpperSelector;