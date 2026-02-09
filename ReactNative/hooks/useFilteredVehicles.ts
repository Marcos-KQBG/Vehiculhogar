import { vehiculos } from '@/constants/Vehicles';
import { useState } from 'react';

function useFilteredVehicles() {


  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehiculos = Array.from(vehiculos.values()).filter((vehiculo) =>
    vehiculo.modelo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehiculo.matricula.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return { searchQuery, setSearchQuery, filteredVehiculos };



}
export default useFilteredVehicles;