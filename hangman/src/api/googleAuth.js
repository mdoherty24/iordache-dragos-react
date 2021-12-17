import { login, logout } from '../actions';
import store from '../store';

let eventBound = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: 'email profile',
        })
        .then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          const googleUser = authInstance.currentUser.get();

          if (!eventBound) {
            authInstance.isSignedIn.listen((isAuthenticated) => {
              authenticationChangeHandler(isAuthenticated, googleUser);
            });

            authenticationChangeHandler(
              authInstance.isSignedIn.get(),
              googleUser,
            );

            eventBound = true;
          }

          resolve(authInstance);
        });
    });
  });
};

const authenticationChangeHandler = (isAuthenticated, googleUser) => {
  if (isAuthenticated === true) {
    const user = googleUser.getBasicProfile();

    store.dispatch(login(buildGoogleUserBasicProfile(user)));
  } else {
    store.dispatch(logout());
  }
};

const buildGoogleUserBasicProfile = (googleUser) => {
  return {
    id: googleUser.getId(),
    firstName: googleUser.getGivenName(),
    lastName: googleUser.getFamilyName(),
    email: googleUser.getEmail(),
    avatar: googleUser.getImageUrl(),
  };
};
