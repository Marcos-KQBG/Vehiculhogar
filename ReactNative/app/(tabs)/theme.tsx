import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function ThemeSettings() {
  const { colors, isDark, toggleTheme } = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Modo oscuro</Text>
          <Text style={styles.subtitle}>{isDark ? 'Activado' : 'Desactivado'}</Text>
        </View>
        <Switch
          value={isDark}
          onValueChange={() => toggleTheme()}
          thumbColor={isDark ? colors.primary : undefined}
        />
      </View>

      <Text style={styles.hint}>Al cambiar el tema, la apariencia de la app se actualizará inmediatamente.</Text>
    </View>
  );
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  row: {
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: 4,
  },
  hint: {
    marginTop: 16,
    color: colors.textSecondary,
  },
});
