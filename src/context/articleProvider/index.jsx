import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState();

  let url = `data/articles.json`;

  const getArticle = async () => {
    try {
      const { data } = await axios.get(url);
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <ArticleContext.Provider value={{ article }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleProvider };

export default ArticleContext;

ArticleProvider.propType = {
  children: PropTypes.node.isRequired,
};
