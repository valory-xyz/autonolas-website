
import { useState, useEffect } from 'react';

export const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(typeof window === 'undefined' ? 0 : null);

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

  return (width <= 767 && width >= 0);
};
