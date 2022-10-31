import { useEffect, useContext } from 'react';
import ArticleContext from '../../context/articleProvider';
import './gallery.css';

const Gallery = () => {
  const { article, getArticle } = useContext(ArticleContext);
  const id = 1;

  useEffect(() => {
    getArticle(id);
  }, []);

  const { pictures, thumbnails } = article;
  if (pictures) {
    return (
      <div className="gallery">
        <div className="gallery-body">
          <img
            className="image-big"
            src={`images/${pictures[0]}`}
            alt="product"
          />
        </div>
        <div className="gallery-footer">
          <img
            className="image-thumb"
            src={`images/${thumbnails[0]}`}
            alt="thumbnail product 1"
          />
          <img
            className="image-thumb"
            src={`images/${thumbnails[1]}`}
            alt="thumbnail product 2"
          />
          <img
            className="image-thumb"
            src={`images/${thumbnails[2]}`}
            alt="thumbnail product 3"
          />
          <img
            className="image-thumb"
            src={`images/${thumbnails[3]}`}
            alt="thumbnail product 4"
          />
        </div>
      </div>
    );
  }
};

export default Gallery;
