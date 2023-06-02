import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import HomeView from "./Components/HomeView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedDetailsView from "./Components/FeedDetailsView";
export default function App() {
  const [loaded] = useFonts({
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
  });
  const STACK = createNativeStackNavigator();
  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen name="Home" component={HomeView} />
        <STACK.Screen name= "FeedDetails" component = {FeedDetailsView}/>
      </STACK.Navigator>
    </NavigationContainer>
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
