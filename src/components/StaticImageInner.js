import React, {useState} from 'react';
import './StaticImageInner.css';

function StaticImageInner(props) {
  const [windowWidth,setWindowWidth] = useState(0);

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  }

  const innerImageStyle = windowWidth < 570 ?
   ({
    width: '100%',
    height: '80vh',
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
  }) : 
   ({
    width: '100%',
    height: '500px',
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'contain',
  });
  return (
      <div className='home-image-container' style={innerImageStyle}>
        <span className='image-header-text'>{props.imageHeaderText}</span>
      </div>
  );
}

export default StaticImageInner;
