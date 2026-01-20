import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function Add() {
  const { colors } = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.textPrimary }}>Tab [Home|Settings]</Text>
    </View>
  );
}

const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});