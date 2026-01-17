import {useState} from 'react';


function useFilteredVehicles(vehiculos: any) {

    const [vehiclesData, setVehiclesData] = useState(vehiculos);
}
export default useFilteredVehicles;