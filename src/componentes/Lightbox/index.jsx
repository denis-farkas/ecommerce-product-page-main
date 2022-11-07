import { useEffect } from 'react';
import { useContext, useState } from 'react';
import ArticleContext from '../../context/articleProvider';
import LightboxContext from '../../context/lightboxProvider';
import './lightbox.css';
import './mobile-lightbox.css';

const Lightbox = () => {
  const { pictures, thumbnails } = useContext(ArticleContext);

  const {
    state: { index },
    dispatch,
    lightboxDisplay,
    setLightBoxDisplay,
  } = useContext(LightboxContext);

  const [lightToShow, setLightToShow] = useState(pictures[index]);

  useEffect(() => {
    setLightToShow(pictures[index]);
  }, [index, pictures]);

  function defineImage(id) {
    dispatch({
      type: 'DEFINE_INDEX',
      payload: id,
    });
    setLightToShow(pictures[id]);
  }
  function isActive(n) {
    const lightThumb = document.querySelectorAll('.light-thumb');
    lightThumb.forEach((element) => element.classList.remove('selected'));
    lightThumb[n].classList.add('selected');
  }
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (event) => {
    event.stopPropagation();
    if (index >= pictures.length - 1) {
      dispatch({
        type: 'DEFINE_INDEX',
        payload: 0,
      });
      setLightToShow(pictures[index]);
    } else {
      dispatch({
        type: 'INCREMENT_INDEX',
      });
      setLightToShow(pictures[index]);
    }
  };

  //show previous image in lightbox
  const showPrev = (event) => {
    event.stopPropagation();
    if (index === 0) {
      dispatch({
        type: 'DEFINE_INDEX',
        payload: 3,
      });
      setLightToShow(pictures[3]);
    } else {
      dispatch({
        type: 'DECREMENT_INDEX',
      });
      setLightToShow(pictures[index]);
    }
  };
  if (lightboxDisplay) {
    return (
      <div className="lightbox">
        <div className="lightbox-container">
          <div className="lightbox-header">
            <button className="lightbox-close" onClick={hideLightBox}>
              <img src="images/icon-close.svg" alt="close" />
            </button>
          </div>
          <div className="lightbox-body">
            <button className="lightbox-previous" onClick={showPrev}>
              <img src="images/icon-previous.svg" alt="previous" />
            </button>
            <img className="lightbox-img" src={lightToShow} alt="product" />
            <button className="lightbox-next" onClick={showNext}>
              <img src="images/icon-next.svg" alt="next" />
            </button>
          </div>
          <div className="lightbox-footer">
            <div
              className="light-thumb"
              tabIndex="0"
              onClick={(e) => {
                defineImage(0);
                isActive(0);
              }}
            >
              <img
                className="light-image-thumb"
                src={`images/${thumbnails[0]}`}
                alt="thumbnail product 1"
              />
            </div>
            <div
              className="light-thumb"
              tabIndex="0"
              onClick={(e) => {
                defineImage(1);
                isActive(1);
              }}
            >
              <img
                className="light-image-thumb"
                src={`images/${thumbnails[1]}`}
                alt="thumbnail product 2"
              />
            </div>
            <div
              className="light-thumb"
              onClick={(e) => {
                defineImage(2);
                isActive(2);
              }}
              tabIndex="0"
            >
              <img
                className="light-image-thumb"
                src={`images/${thumbnails[2]}`}
                alt="thumbnail product 3"
              />
            </div>
            <div
              className="light-thumb"
              onClick={(e) => {
                defineImage(3);
                isActive(3);
              }}
              tabIndex="0"
            >
              <img
                className="light-image-thumb"
                src={`images/${thumbnails[3]}`}
                alt="thumbnail product 4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Lightbox;
