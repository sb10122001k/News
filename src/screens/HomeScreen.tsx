import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  NewsDetail: { newsItem: NewsItem };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsDetail'>;

interface NewsItem {
  _id: string;
  title: string;
  imageURL: string;
  content: string;
  __v: number;
}

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch news data from your API here
    const fetchNewsData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getNews');
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <View>
      <FlatList
        data={newsData}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetail', { newsItem: item })}
          >
            <View style={{ flexDirection: 'row', borderWidth: 1, alignItems: 'center', padding: 10 ,marginBottom:5}}>
              <Image source={{ uri: item.imageURL }} style={{ width: 100, height: 100, marginRight: 10 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>{item.title}</Text>
                <Text numberOfLines={2}>{item.content}</Text>
              </View>
            </View>

          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
