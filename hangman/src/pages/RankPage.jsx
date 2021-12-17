import { Component } from 'react';
import { connect } from 'react-redux';
import { StatsList } from '../components/stats';
import { Container } from './../components/common';

// if time, apply ajax here too

class RankPage extends Component {
  render() {
    const { id, stats } = this.props.userStats[this.props.match.params.id];

    return (
      <Container>
        <header>
          <h1 className="text-3xl bold">User: {id}</h1>
        </header>
        <main className="mt-8">
          <StatsList {...stats}></StatsList>
        </main>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userStats: state.users.users,
  };
};

export default connect(mapStateToProps)(RankPage);
