import React, {useContext} from 'react'
import { Button, Card } from 'semantic-ui-react'
import ArticlesContext from '../context/articles/articlesContext';
import { Link as RouterLink } from 'react-router-dom';

export const Articles = () => {
  const { articles } = useContext(ArticlesContext);
  return (
    <div className="articles">
      {articles && 
        <Card.Group>
          {articles.map((article) => 
            <Card key={article.id}>
              <Card.Content>
                <Card.Header>{article.label}</Card.Header>
                <img src={article.img} alt={article.label} />
                <Card.Description>
                  {article.content}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as={RouterLink} to={`/articles/${article.id}`}>
                  Découvrir
                </Button>
              </Card.Content>
            </Card>
          )}      
      </Card.Group>}
      
    </div>
  )
}
