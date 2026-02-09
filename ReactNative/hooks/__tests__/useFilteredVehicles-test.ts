import { act, renderHook } from "@testing-library/react-native";
import useFilteredVehicles from "../useFilteredVehicles";

describe("Fichero useFilteredVehicles: useFilteredVehicles", () => {
    test("Cambia la variable searchQuery", () => {
        const { result } = renderHook(() => useFilteredVehicles());

        expect(result.current.searchQuery).toBe('');

        act(() => {
            result.current.setSearchQuery('test');
        });

        expect(result.current.searchQuery).toBe('test');
    });

    test("Filtra los vehiculos correctamente", () => {
        const { result } = renderHook(() => useFilteredVehicles());

        act(() => {
            result.current.setSearchQuery('test');
        });

        const filtered = result.current.filteredVehiculos;
        expect(
            filtered.every(
                (vehiculo) =>
                    vehiculo.modelo.toLowerCase().includes('test') ||
                    vehiculo.matricula.toLowerCase().includes('test')
            )
        ).toBe(true);
    });
});