import { render } from "@testing-library/react-native";
import { ThemeProvider } from "../../app/ThemeContext";
import ItemList from "../ItemList";

describe("Fichero ItemList: ItemList", () => {

    test("Renderiza la card correctamente", () => {
        
        const itemData = {
            modelo: "Test Model",
            matricula: "TEST123",
            ano: "2020",
            motor: "Test Motor",
            imagen: "https://via.placeholder.com/150"
        }

        const { getByText } = render(<ItemList {...itemData} />, { wrapper: ThemeProvider });
        expect(getByText("Test Model")).toBeTruthy();
        expect(getByText("Matrícula:")).toBeTruthy();
        expect(getByText("TEST123")).toBeTruthy();
        expect(getByText("Año:")).toBeTruthy();
        expect(getByText("2020")).toBeTruthy();
        expect(getByText("Motor:")).toBeTruthy();
        expect(getByText("Test Motor")).toBeTruthy();
        

    });

    test("Renderiza la card con datos vacíos", () => {
        const itemData = {
            modelo: "",
            matricula: "",
            ano: "",
            motor: "",
            imagen: "https://via.placeholder.com/150"
        }

        const { getByText } = render(<ItemList {...itemData} />, { wrapper: ThemeProvider });
        expect(getByText("")).toBeTruthy();
        expect(getByText("Matrícula:")).toBeTruthy();
        expect(getByText("")).toBeTruthy();
        expect(getByText("Año:")).toBeTruthy();
        expect(getByText("")).toBeTruthy();
        expect(getByText("Motor:")).toBeTruthy();
        expect(getByText("")).toBeTruthy();

    });
});
