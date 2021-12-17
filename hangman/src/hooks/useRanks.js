import { useSelector } from 'react-redux';

export const useRanks = () => {
  return useSelector(({ users }) => {
    return {
      stats: users.users,
    };
  });
};
