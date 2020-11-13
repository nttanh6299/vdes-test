import { useState, useEffect, useRef } from 'react';

const useClickedOutside = () => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const elementRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    setClickedOutside(
      elementRef.current && !elementRef.current.contains(e.target as Node)
    );
  };

  const setElementRef = () => elementRef;

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { clickedOutside, setElementRef };
};

export default useClickedOutside;
