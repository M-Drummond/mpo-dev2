import axios from "axios";

import { slugify } from "~/utils/slugify";

interface NewsPost {
  slug: string;
  title: string;
}

const API_URL = "https://newsapi.org/v2/everything"; // Endpoint for news

export async function fetchNews(country = "us") {
  try {
    const response = await axios.get(API_URL, {
      params: {
        pageSize: 12,
        qInTitle: 'cyber',
        apiKey: "0a7f055560954f7a8de20f62a922de3c",
      },
    });

    for(const article of response.data.articles) {
      article.slug = slugify(article.title )
 }


    console.log(response.data.articles);

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
