import { appThemeColors, appThemes } from "@/theme/app-theme";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

const navigationThemes = {
  light:{
    ...DefaultTheme,
      colors:{
      ...DefaultTheme.colors,
      background : appThemeColors.light.background,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: appThemeColors.dark.background,
    },
  },
};

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [loaded, error] = useFonts({
    ...Feather.font,
    ...FontAwesome.font,
    ...FontAwesome6.font,
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold
  });
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme ?? "light";
  const backgroundColor = appThemeColors[scheme].background;

  const fontReady = loaded || !!error;

  useEffect(()=>{
    if(!appReady && fontReady){
      SplashScreen.hideAsync().then(()=> setAppReady(true))
    }
  },[appReady, fontReady]);

  if (!appReady) return null;

  const isAuthenticated = false;

  return (
  <ThemeProvider value={navigationThemes[scheme]}>
    <View style={[appThemes[scheme], { backgroundColor, flex: 1 }]}>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} animated key={scheme} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(root)" />
        </Stack.Protected>

        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </View>
  </ThemeProvider>
);
}
