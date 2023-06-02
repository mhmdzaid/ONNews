import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const FeedDetailsView = ({ route }) => {
  const { item } = route.params;
  const { height } = useWindowDimensions();

  return (
    <ScrollView>
      <View style={styles.containerView}>
        <Image source={{ uri: item.image }} style={{ height: height * 0.3 }} />
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.desc}> {item.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: Colors.bgColor,
    flex: 1,
  },
  title: {
    fontFamily: "Anton-Regular",
    fontSize: 14.5,
    color: Colors.aggresiveCardBGColor,
    margin: 16,
  },
  desc: {
    margin: 16,
    marginTop: 0
  }
});
export default FeedDetailsView;
