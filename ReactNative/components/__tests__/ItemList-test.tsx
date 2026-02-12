import { fireEvent, render } from "@testing-library/react-native";
import { act, create } from "react-test-renderer";
import { ThemeProvider } from "../../app/ThemeContext";
import ItemList from "../ItemList";

const mockPush = jest.fn();

jest.mock("expo-router", () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

describe("Fichero ItemList: ItemList", () => {
    beforeEach(() => {
        mockPush.mockClear();
    });

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

    test("Renderiza la imagen correctamente", () => {
        
        const itemData = {
            modelo: "Test Model",
            matricula: "TEST123",
            ano: "2020",
            motor: "Test Motor",
            imagen: "https://via.placeholder.com/150"
        }

        const { getByTestId } = render(<ItemList {...itemData} />, { wrapper: ThemeProvider });
        const image = getByTestId("item-image");
        expect(image.props.source.uri).toBe("https://via.placeholder.com/150");
    });

    test("Navega al detalle del vehículo al presionar la card", () => {
        
        const itemData = {
            modelo: "Test Model",
            matricula: "TEST123",
            ano: "2020",
            motor: "Test Motor",
            imagen: "https://via.placeholder.com/150"
        }

        const { getByText } = render(<ItemList {...itemData} />, { wrapper: ThemeProvider });
        fireEvent.press(getByText("Test Model"));
        expect(mockPush).toHaveBeenCalledWith({
            pathname: "../vehicle",
            params: { matricula: "TEST123" },
        });

    });

    test("Comprueba estilos para pressed true/false", () => {
        
        const itemData = {
            modelo: "Test Model",
            matricula: "TEST123",
            ano: "2020",
            motor: "Test Motor",
            imagen: "https://via.placeholder.com/150"
        }
        let tree: ReturnType<typeof create>;

        act(() => {
            tree = create(
                <ThemeProvider>
                    <ItemList {...itemData} />
                </ThemeProvider>
            );
        });

        const pressable = tree.root.findByProps({ testID: "item-card" });
        const styleFn = pressable.props.style;
        const styleWhenPressed = styleFn({ pressed: true });
        const styleWhenNotPressed = styleFn({ pressed: false });

        expect(styleWhenPressed).toEqual(expect.arrayContaining([
            expect.objectContaining({ opacity: 0.7 }),
        ]));
        expect(styleWhenNotPressed).not.toEqual(expect.arrayContaining([
            expect.objectContaining({ opacity: 0.7 }),
        ]));
    });
});
