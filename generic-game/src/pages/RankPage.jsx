import { UserStats } from '../components/profile';

export const RankPage = () => {
  return (
    <div className="mx-auto p-4 container">
      <header>
        <h1 className="text-3xl bold">User rank</h1>
      </header>

      <section className="mt-8">
        <UserStats></UserStats>
      </section>
    </div>
  );
};

export default RankPage;
