import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './type';

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

type Props = {
  route: NewsDetailScreenRouteProp;
};

const NewsDetailScreen = ({ route }: Props) => {
  const { newsItem } = route.params;

  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 200 }}>
        <Image source={{ uri: newsItem.imageURL }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>{newsItem.title}</Text>
        </View>
      <ScrollView style={{ maxHeight: '50%' }}>
        <View style={{ paddingLeft:10, paddingRight:10 }}>
          <Text style={{ fontSize: 15 }}>{newsItem.content}</Text>
        </View>
        
      </ScrollView>
      <View style={{backgroundColor:'black'}}></View>
      
    </View>
  );
};

export default NewsDetailScreen;
