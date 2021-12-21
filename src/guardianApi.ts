import axios from 'axios';

interface GuardianSearchResponse {
  response: {
    results: { webTitle: string; webUrl: string }[];
  };
}

export interface GuardianArticle {
  title: string;
  url: string;
}

export async function fetchLatestArticles(section: string) {
  const response = await axios.get<GuardianSearchResponse>('https://content.guardianapis.com/search', {
    params: {
      'api-key': 'test',
      section: section,
    },
  });
  const content = response.data;
  const articles = content.response.results.map(
    (result): GuardianArticle => ({ title: result.webTitle, url: result.webUrl })
  );
  return articles;
}
