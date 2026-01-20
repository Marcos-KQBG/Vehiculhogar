import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ThemeProvider } from "./ThemeContext";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Roboto : require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
  });

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="vehicle" options={{ headerShown: false }} />
        <Stack.Screen name="theme" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
