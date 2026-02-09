import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../app/ThemeContext";

interface ItemListData {
    modelo: string,
    matricula : string,
    ano: string,
    motor: string,
    imagen: string,
    onPress?: () => void
}

function ItemList({modelo, matricula, ano, motor, imagen} : ItemListData) {
    const router = useRouter();
    const { colors } = useTheme();

    const styles = React.useMemo(() => makeStyles(colors), [colors]);

    return (
        <Pressable onPress= {() => router.push({
                pathname: "../vehicle",
                params:  {matricula} 
            })} style={({ pressed }) => [
            styles.container,
            pressed && styles.containerPressed
        ]}>
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
        
        </Pressable>
    );

}

const makeStyles = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.textPrimary,
        borderRadius: 12,
        overflow: 'hidden',
        margin: 8,
        width: 180,
        shadowColor: colors.background,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexGrow: 1,
        maxWidth: '75%',
    },
    containerPressed: {
        opacity: 0.7,
    },
    image: {
        width: '100%',
        height: 120,
        backgroundColor: colors.textSecondary,
    },
    infoContainer: {
        padding: 12,
        gap: 6,
    },
    modelo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.surface,
        marginBottom: 4,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: colors.textSecondary,
    },
    value: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: colors.surface,
        fontWeight: '500',
    },
});


export default ItemList;