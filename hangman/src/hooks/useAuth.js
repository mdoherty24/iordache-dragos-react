import { useSelector } from 'react-redux';

// this hook is deliberately named useSess
// in order for it to not be confused by actual useSession hooks
// from dedicated libraries, this is to understand it is custom

export const useAuth = () => {
  return useSelector(({ auth }) => {
    return {
      ...auth,
    };
  });
};
