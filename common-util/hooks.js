
import { useState, useEffect } from 'react';

export const useCheckMobileScreen = () => {
  // const [width, setWidth] = useState(typeof window === 'undefined' ? 0 : window.innerWidth);
  const [width, setWidth] = useState(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
  }, [width]);


  return (width <= 768 && width > 0);
};

export const EX = null;
