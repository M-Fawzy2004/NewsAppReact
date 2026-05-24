import axios from "axios";
import { Articles } from "../../components/MainNews/TypeData";

export async function getTopNews(page: number = 1, pageSize: number = 7) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=b8d7d17eb6f642a9a843afe4ca674cbe`;

  try {
    const response = await axios.get(url);
    const articles = response.data?.articles || [];

    const topNews = articles.filter(
      (article: Articles) => article.urlToImage && article.title,
    );
    return topNews;
  } catch (error) {
    console.error("Error fetching top news:", error);
    return [];
  }
}
