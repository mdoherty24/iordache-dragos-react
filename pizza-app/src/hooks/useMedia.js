import { useEffect, useState } from 'react';
import { isBrowser } from '../shared';

export const useMedia = (query) => {
  if (!isBrowser()) {
    return true;
  }
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = (event) => {
      setMatches(event.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
};
