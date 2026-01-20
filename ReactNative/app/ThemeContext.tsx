import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { Colors, ThemeColors } from '../constants/Colors';

interface ThemeContextType {
  isDark: boolean;
  colors: ThemeColors; 
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const system = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState<boolean>(() => system === 'dark');

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === 'dark');
    });
    return () => sub.remove();
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme: ThemeContextType = {
    isDark,
    colors: isDark ? Colors.dark : Colors.light,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  return context;
};