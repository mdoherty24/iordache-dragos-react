import { AuthAction, withAuthUser } from 'next-firebase-auth';

export const Account = () => {
  return <h1>account</h1>;
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Account);
