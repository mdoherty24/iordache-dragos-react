import { BsFillQuestionDiamondFill } from 'react-icons/bs';

export const Letter = ({ letter = '', covered = false, ...rest }) => {
  return (
    <button {...rest}>
      {covered ? (
        <BsFillQuestionDiamondFill></BsFillQuestionDiamondFill>
      ) : (
        letter
      )}
    </button>
  );
};

export default Letter;
