import { useEffect, useState } from 'react';

export const useMinWidth = (minWidth: number): boolean => {
  const media = `(min-width: ${minWidth}px)`;

  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(media);

    setMatch(mql.matches);
  }, []);

  return match;
};
