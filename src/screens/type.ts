export type RootStackParamList = {
    Home: undefined;
    NewsDetail: { newsItem: NewsItem };
  };
  
  export interface NewsItem {
    id: number;
    title: string;
    imageURL: string;
    content: string;
  }
  