import axios from "axios";
import { TypeAllNews } from "../../components/AllNews/TypeAllNews";

export async function getAllNews(page: number = 1, pageSize: number = 7) {
  const url = `https://newsapi.org/v2/everything?q=general&page=${page}&pageSize=${pageSize}&apiKey=b8d7d17eb6f642a9a843afe4ca674cbe`;
  try {
    const response = await axios.get(url);
    const articles = response.data?.articles || [];

    const allNews = articles.filter((article: TypeAllNews) => {
      const hasImage = article.urlToImage && article.urlToImage.trim() !== "";
      const hasTitle = article.title && article.title.trim() !== "No Title";
      const hasAuthor =
        article.author && article.author.trim() !== "N/A  Unknown Author";

      return hasImage && hasTitle && hasAuthor;
    });
    return allNews;
  } catch (error) {
    console.error("Error fetching all news:", error);
    return [];
  }
}
