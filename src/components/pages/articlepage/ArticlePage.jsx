import React, { useState, useEffect } from 'react';
import { Page } from '../../page/Page';
import './ArticlePage.scss';
import { LABELS } from '../../../strings';
import { Breadcrumb } from '../../breadcrumb/Breadcrumb'
import { ArticleCard } from '../../cards/article-card/ArticleCard';
import { useParams } from 'react-router-dom';
import { Spinner } from 'evergreen-ui';

const CRUMBS = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Articole",
    path: "/articole"
  }
]

function ArticlePage() {

  const [articles, setArticles] = useState([]);
  const params = useParams();

  useEffect(() => {
    const { editionId } = params;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://jurnal-medical-server.herokuapp.com/edition/${editionId}/articles`);
        const json = await response.json();
        const { data } = json;
        setArticles(data);
      } catch (e) {
        throw new Error(e);
      }
    }
    fetchData();

  }, [params])

  return (
    <Page title={LABELS.articlePage}>
      <Breadcrumb list={CRUMBS} />
      {
        articles.length <= 0 ?
          <Spinner size={64} /> :
          articles.map(article => (
            <ArticleCard
              title={article.title}
            />
          ))

      }
    </Page>
  )
}

export { ArticlePage };