import { useState, useEffect } from 'react';
import "./WindowSize.css"

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };


    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div>
      <h1 className='title__data'>Window Size</h1>
      <p className='style-width'>Width: {windowSize.width}px</p>
      <p className='style-height'>Height: {windowSize.height}px</p>
    </div>
  );
}

export default WindowSize;
