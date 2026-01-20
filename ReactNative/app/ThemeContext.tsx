import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Colors, ThemeColors } from '../constants/Colors';

interface ThemeContextType {
  isDark: boolean;
  colors: ThemeColors; 
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

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