export type Article = {
  source?: { id: string | null; name: string };
  urlToImage: string;
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  url: string;
};
