import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import FeedView from "./FeedView";
import Colors from "../assets/Colors";
const HomeView = ({navigation}) => {
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://api.currentsapi.services/v1/latest-news?apiKey=Rz2T3-usilcDfByS-Veiuq2iJJzQGP3aVaeyKehTCb2Ibr2P"
      );
      const data = await response.json();
      console.log(data.status);
      setNews(data.news);
      setNewsLoaded(true);
    } catch (error) {
      console.log("---------------- Error -----------");
      console.log(error);
    }
  };

  useEffect(fetchNews, []);

if (!newsLoaded) {
    return <Text style = {styles.loadingText}> Loading ...</Text>
}
  return (
    <View style={styles.containerView}>
      <FlatList
        data={news}
        keyExtractor={(item) => {item.id}}
        renderItem={({item}) => 
          <FeedView navigation={navigation} item={item} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    marginTop:  30,
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  loadingText: {
    fontFamily: "Anton-Regular",
    fontSize: 15,
    color: Colors.middleColor
  }
});
export default HomeView;
