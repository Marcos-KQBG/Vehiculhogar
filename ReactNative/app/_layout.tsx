import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Roboto : require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf")
  });

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
