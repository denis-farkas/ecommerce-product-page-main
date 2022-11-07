import { useContext, useState } from 'react';
import ArticleContext from '../../context/articleProvider';
import LightboxContext from '../../context/lightboxProvider';
import './gallery.css';
import './mobile-gallery.css';

const Gallery = () => {
  const { pictures, thumbnails } = useContext(ArticleContext);

  const {
    state: { index },
    dispatch,
    setLightBoxDisplay,
  } = useContext(LightboxContext);

  const [imageToShow, setImageToShow] = useState(pictures[index]);

  function defineImage(id) {
    dispatch({
      type: 'DEFINE_INDEX',
      payload: id,
    });
    setImageToShow(pictures[id]);
  }

  function showImageLight() {
    setLightBoxDisplay(true);
  }

  function isActive(n) {
    const thumb = document.querySelectorAll('.thumb');
    thumb.forEach((element) => element.classList.remove('selected'));
    thumb[n].classList.add('selected');
  }

  if (thumbnails) {
    return (
      <div className="gallery">
        <div className="gallery-body">
          <img
            className="image-big"
            src={imageToShow}
            alt="product"
            onClick={() => showImageLight()}
          />
        </div>
        <div className="gallery-footer">
          <div
            className="thumb"
            tabIndex="0"
            onClick={(e) => {
              defineImage(0);
              isActive(0);
            }}
          >
            <img
              className="image-thumb"
              src={`images/${thumbnails[0]}`}
              alt="thumbnail product 1"
            />
          </div>
          <div
            className="thumb"
            tabIndex="0"
            onClick={(e) => {
              defineImage(1);
              isActive(1);
            }}
          >
            <img
              className="image-thumb"
              src={`images/${thumbnails[1]}`}
              alt="thumbnail product 2"
            />
          </div>
          <div
            className="thumb"
            onClick={(e) => {
              defineImage(2);
              isActive(2);
            }}
            tabIndex="0"
          >
            <img
              className="image-thumb"
              src={`images/${thumbnails[2]}`}
              alt="thumbnail product 3"
            />
          </div>
          <div
            className="thumb"
            onClick={(e) => {
              defineImage(3);
              isActive(3);
            }}
            tabIndex="0"
          >
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
