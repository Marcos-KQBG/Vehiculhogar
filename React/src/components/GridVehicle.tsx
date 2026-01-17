import GridText from "./GridText"

function GridVehicle({text, value} : {text:string, value:string}) {
    return (
        <>
            <div className="flex-col">
                <GridText text= {text} />
                <GridText text= {value} />
            </div>

        </>
    )

}
export default GridVehicle;