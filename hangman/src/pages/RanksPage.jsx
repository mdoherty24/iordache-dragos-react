import { Component } from 'react';
import { Container } from '../components/common';
import { Users } from '../components/profile';

export class RanksPage extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1 className="text-3xl bold">Ranks</h1>
        </header>
        <main className="mt-8">
          <Users></Users>
        </main>
      </Container>
    );
  }
}

export default RanksPage;
