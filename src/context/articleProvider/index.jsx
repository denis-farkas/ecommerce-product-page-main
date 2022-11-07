import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState({});

  //simulated article navigation interface, because only one article in json
  let id_article = 1;

  const getArticle = async (id_article) => {
    try {
      const { data } = await axios.get(`data/article${id_article}.json`);
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle(id_article);
  }, []);

  const { pictures, thumbnails } = article;

  if (pictures) {
    return (
      <ArticleContext.Provider
        value={{
          article,
          pictures,
          thumbnails,
        }}
      >
        {children}
      </ArticleContext.Provider>
    );
  }
};

export { ArticleProvider };

export default ArticleContext;

ArticleProvider.propType = {
  children: PropTypes.node.isRequired,
};
