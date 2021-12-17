import { Component } from 'react';
import { connect } from 'react-redux';
import { IoGameController } from 'react-icons/io5';
import { BiHappy } from 'react-icons/bi';
import { RiEmotionUnhappyLine } from 'react-icons/ri';

class StatsList extends Component {
  render() {
    const { gamesPlayed, gamesLost, gamesWon } = this.props;

    return (
      <ul className="border rounded-md shadow">
        <li key="1" className="border-b p-3">
          <IoGameController className="mr-2 text-purple-500 fill-current"></IoGameController>
          {gamesPlayed} games played.
        </li>
        <li key="2" className="border-b p-3">
          <BiHappy className="mr-2 text-green-500 fill-current"></BiHappy>
          {gamesWon} games won.
        </li>
        <li key="3" className="p-3">
          <RiEmotionUnhappyLine className="mr-2 text-red-500 fill-current"></RiEmotionUnhappyLine>
          {gamesLost} games lost.
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  };
};

export default connect(mapStateToProps)(StatsList);
