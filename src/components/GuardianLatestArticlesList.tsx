import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchLatestArticles, GuardianArticle } from '../guardianApi';

const ArticlesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ArticlesListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 2px solid #ededed;
  }
`;

const ArticleLink = styled.a`
  text-decoration: none;
  color: #000000;
  &:visited {
    color: #7b7b7b;
  }
`;

export interface GuardianLatestArticlesListProps {
  section: string;
}
export default function GuardianLatestArticlesList({ section }: GuardianLatestArticlesListProps) {
  const [articles, setArticles] = useState<GuardianArticle[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await fetchLatestArticles(section);
      setArticles(articles);
    };
    fetchArticles();
  }, [section]);

  if (articles === null) {
    return <p>Loading...</p>;
  }

  return (
    <ArticlesList>
      {articles.map((article) => (
        <ArticlesListItem key={article.url}>
          <ArticleLink href={article.url}>{article.title}</ArticleLink>
        </ArticlesListItem>
      ))}
    </ArticlesList>
  );
}
