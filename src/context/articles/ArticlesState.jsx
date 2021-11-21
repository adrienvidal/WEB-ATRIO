import React, { useReducer } from 'react';
import ArticlesContext from './articlesContext';
import articlesReducer from './articlesReducer';

const ArticlesState = (props) => {
  const initialState = {
    articles: [
      { id : 1, label : "Mon titre1", content : "Lorem ipsum dolor sit amet consectetur", img : 'https://via.placeholder.com/1200x259' },
      { id : 2, label : "Mon titre2", content : "Lorem ipsum dolor sit amet consectetur", img : 'https://via.placeholder.com/1200x259' },
    ],
    comments: [
      { id : 1, article_id : 1, content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis id culpa necessitatibus dolores sequi eius animi ipsam, officiis accusantium fugiat facere delectus quas eos quisquam mollitia neque quibusdam illum." },
      { id : 2, article_id : 2, content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis id culpa necessitatibus dolores sequi eius animi ipsam, officiis accusantium fugiat facere delectus quas eos quisquam mollitia neque quibusdam illum." },
      { id : 3, article_id : 2, content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis id culpa necessitatibus dolores sequi eius animi ipsam, officiis accusantium fugiat facere delectus quas eos quisquam mollitia neque quibusdam illum." },
      { id : 4, article_id : 2, content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis id culpa necessitatibus dolores sequi eius animi ipsam, officiis accusantium fugiat facere delectus quas eos quisquam mollitia neque quibusdam illum." },
    ],
  };

  const [state, dispatch] = useReducer(articlesReducer, initialState);

  // Add Comment
  const addComment = (newComment) => {
    dispatch({ type: 'ADD_COMMENT', payload: newComment });
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles: state.articles,
        comments: state.comments,
        addComment
      }}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesState;
