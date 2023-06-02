import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import HomeView from "./Components/HomeView";
export default function App() {
  const [loaded] = useFonts({
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <>
        <HomeView />
        <StatusBar style="auto" />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
