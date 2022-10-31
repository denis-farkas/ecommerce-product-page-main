import { useState, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState({});

  const getArticle = async (id) => {
    try {
      const { data } = await axios.get(`data/article${id}.json`);
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ArticleContext.Provider value={{ article, getArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleProvider };

export default ArticleContext;

ArticleProvider.propType = {
  children: PropTypes.node.isRequired,
};
