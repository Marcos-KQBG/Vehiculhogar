import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface ItemListData {
    modelo: string,
    matricula : string,
    ano: string,
    motor: string,
    imagen: string
}

function ItemList({modelo, matricula, ano, motor, imagen} : ItemListData) {

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: imagen }} 
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.modelo}>{modelo}</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Matrícula:</Text>
                    <Text style={styles.value}>{matricula}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Año:</Text>
                    <Text style={styles.value}>{ano}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Motor:</Text>
                    <Text style={styles.value}>{motor}</Text>
                </View>
            </View>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.textPrimary,
        borderRadius: 12,
        overflow: 'hidden',
        margin: 8,
        width: 180,
        shadowColor: Colors.background,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 120,
        backgroundColor: Colors.textSecondary,
    },
    infoContainer: {
        padding: 12,
        gap: 6,
    },
    modelo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.surface,
        marginBottom: 4,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 12,
        color: Colors.textSecondary,
    },
    value: {
        fontSize: 12,
        color: Colors.surface,
        fontWeight: '500',
    },
});
export default ItemList;