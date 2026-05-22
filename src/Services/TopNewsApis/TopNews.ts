import axios from "axios";
import { Articles } from "../../components/MainNews/TypeData";

export async function getTopNews() {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=c2ef68fb9506471a81d09f6a94064ba7";

  const NEWS_LIMIT = 7;

  try {
    const response = await axios.get(url);
    const articles = response.data?.articles || [];

    const topNews = articles
      .filter((article: Articles) => article.urlToImage && article.title)
      .slice(0, NEWS_LIMIT);

    return topNews;
  } catch (error) {
    console.error("Error fetching top news:", error);
    return [];
  }
}
