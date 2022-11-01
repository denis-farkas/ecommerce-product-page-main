import { useContext } from 'react';
import ArticleContext from '../../context/articleProvider';
import './gallery.css';

const Gallery = () => {
  const { article } = useContext(ArticleContext);

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
          <div className="thumb">
            <img
              className="image-thumb selected"
              src={`images/${thumbnails[0]}`}
              alt="thumbnail product 1"
            />
          </div>
          <div className="thumb">
            <img
              className="image-thumb"
              src={`images/${thumbnails[1]}`}
              alt="thumbnail product 2"
            />
          </div>
          <div className="thumb">
            <img
              className="image-thumb"
              src={`images/${thumbnails[2]}`}
              alt="thumbnail product 3"
            />
          </div>
          <div className="thumb">
            <img
              className="image-thumb"
              src={`images/${thumbnails[3]}`}
              alt="thumbnail product 4"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Gallery;
