import { vehiculos } from '@/constants/Vehicles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from './ThemeContext';

export default function Vehicle() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { colors } = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);
  
  const { matricula } = params;
  const vehiculo = vehiculos.get(matricula as string);

  const handleEdit = () => {
    console.log('Editar vehículo:', matricula);
  };

  const handleAddAppointment = () => {
    console.log('Añadir cita para:', matricula);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Volver"
        >
          <FontAwesome name="arrow-left" size={24} color={colors.textPrimary} />
        </Pressable>
        <Text style={styles.headerTitle}>Detalles del Vehículo</Text>
        <View style={{ width: 40 }} />
      </View>

      <Image 
        source={{ uri: vehiculo?.imagen }} 
        style={styles.vehicleImage}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.modelo}>{vehiculo?.modelo}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información del Vehículo</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Matrícula:</Text>
            <Text style={styles.infoValue}>{matricula}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Año:</Text>
            <Text style={styles.infoValue}>{vehiculo?.año}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Motor:</Text>
            <Text style={styles.infoValue}>{vehiculo?.motor}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable 
            style={({ pressed }) => [styles.button, styles.editButton, pressed && styles.buttonPressed]}
            onPress={handleEdit}
            accessibilityRole="button"
            accessibilityLabel={`Editar ${vehiculo?.modelo}`}
          >
            <FontAwesome name="edit" size={20} color="white" />
            <Text style={styles.buttonText}>Editar</Text>
          </Pressable>

          <Pressable 
            style={({ pressed }) => [styles.button, styles.appointmentButton, pressed && styles.buttonPressed]}
            onPress={handleAddAppointment}
            accessibilityRole="button"
            accessibilityLabel={`Añadir cita para ${vehiculo?.modelo}`}
          >
            <FontAwesome name="calendar" size={20} color="white" />
            <Text style={styles.buttonText}>Añadir Cita</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  vehicleImage: {
    width: '100%',
    height: 300,
    backgroundColor: colors.textSecondary,
  },
  content: {
    padding: 20,
  },
  modelo: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
  },
  section: {
    backgroundColor: colors.textPrimary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.background,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary,
  },
  infoLabel: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  infoValue: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: colors.background,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  editButton: {
    backgroundColor: colors.primary || '#4CAF50',
  },
  appointmentButton: {
    backgroundColor: colors.primary || '#2196F3',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
