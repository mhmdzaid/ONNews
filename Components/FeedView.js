import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useWindowDimensions } from "react-native";

import Colors from "../assets/Colors";
const FeedView = ({ item , navigation}) => {
  const { width, height } = useWindowDimensions();
  const navigateToFeedDetailsHandler = () => {
    navigation.navigate('FeedDetails', {item})
  }
  return (
    <View
      key={item.id}
      style={[styles.containerView, { height: height * 0.3 }]}
    >
      <Pressable onPress={navigateToFeedDetailsHandler}>
        <View style={styles.feedView}>
          <Image style={styles.imageView} source={{ uri: item.image }} />
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    margin: 16,
    flex: 1,
    overflow: "visible",
    elevation: 2,
    shadowColor: Colors.aggresiveCardBGColor,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.8,
  },
  feedView: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Colors.aggresiveCardBGColor,
  },
  imageView: {
    height: 150,
  },
  title: {
    fontFamily: "Anton-Regular",
    fontSize: 17,
    color: "#FFFFFF",
    padding: 16,
    marginBottom: 10,
  },
});

export default FeedView;
