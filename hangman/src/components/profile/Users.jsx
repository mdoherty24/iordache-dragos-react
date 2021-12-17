import { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/userActions';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';

class Users extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  renderUsers() {
    return Object.entries(this.props.userStats).map(([userId, user]) => {
      return (
        <li className="border-b p-3 " key={userId}>
          <Link
            to={`/ranks/${userId}`}
            className="flex justify-between items-center"
          >
            <ImUser></ImUser>
            <span className="truncate ... inline-block w-32">{userId}</span>
            <span>Games played: {user.stats.gamesPlayed}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return Object.entries(this.props.userStats).length > 0 ? (
      <ul className="border rounded-md shadow">{this.renderUsers()}</ul>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    userStats: state.users.users,
  };
};

export default connect(mapStateToProps)(Users);
