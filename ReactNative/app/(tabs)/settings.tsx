import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function Settings() {
  const { colors } = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable style={styles.row} onPress={() => router.push('./profile') }>
        <Text style={styles.title}>Perfil y privacidad</Text>
        <FontAwesome name="chevron-right" size={18} color={colors.textSecondary} />
      </Pressable>

      <Pressable style={styles.row} onPress={() => router.push('./theme') }>
        <Text style={styles.title}>Tema</Text>
        <FontAwesome name="chevron-right" size={18} color={colors.textSecondary} />
      </Pressable>

      <View style={styles.row}>
        <Text style={styles.title}>Versión de la aplicación</Text>
        <Text style={styles.subtitle}>1.0.0</Text>
      </View>
    </View>
  );
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: colors.surface,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textSecondary,
  },
});
