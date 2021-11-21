import React, { useContext, useEffect, useState } from 'react'
import ArticlesContext from '../context/articles/articlesContext';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'semantic-ui-react';

export const ArticleDetail = () => {
  const { articles, comments, addComment } = useContext(ArticlesContext);
  const { articleId } = useParams();
  const [article, setArticle] = useState({})
  const [articleComments, setArticleComments] = useState([])

  const [myComment, setMyComment] = useState('');

  const onChange = (e) =>
  setMyComment(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (myComment === '') return

    const newComment = {
      id: uuidv4(),
      article_id: parseInt(articleId),
      content: myComment
    }

    addComment(newComment);
    setMyComment('')
  };

  useEffect(() => {
    if(articles.length > 0 && articleId){
      setArticle(articles.filter((article) => article.id === parseInt(articleId))[0])
    }    
  }, [articles, articleId])
  
  useEffect(() => {
    if(comments.length > 0 && articleId){
      setArticleComments(comments.filter((comment) => comment.article_id === parseInt(articleId)))
    }    
  }, [comments, articleId])

  return (
    <div className="article-details">
      <h1>{article.label}</h1>
      <img src={article.img} alt={article.label} />
      <p>{article.content}</p>

      <div className="comments-block">
        <form onSubmit={onSubmit} className="add-comment">
          <input
            type='text'
            placeholder='Ecrire un commentaire'
            name='comment'
            value={myComment}
            onChange={onChange}
          />
          <Button type="submit">
              Ajouter
          </Button>
        </form>
        {articleComments.length > 0 &&
          <div className="comments">
            <h2>Liste des commentaires :</h2>
            {articleComments?.map((comment) =>
              <div className="item" key={comment.id}>
                <p>{comment.content}</p>
              </div>)}
          </div>
        }
      </div>
    </div>
  )
}
