import GridVehicle from "./GridVehicle";

function DropdawnMenu() {
    return (
        <>
            
                <div className="flex fmd:flex gap-5 border-2 bg-white border-black p-5 rounded justify-center">
                    <GridVehicle text="Matricula" value="1234ABC" />
                    <GridVehicle text="Modelo" value="Toyota Corolla" />
                    <GridVehicle text="Motor" value="1.8L" />
                    <GridVehicle text="Año" value="2020" />
                </div>
            

        </>

    );
}
export default DropdawnMenu;
