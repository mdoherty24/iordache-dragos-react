let eventBound = false;

// recipe
export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: 'email profile',
        })
        .then(() => {
          const GoogleAuth = window.gapi.auth2.getAuthInstance();
          const googleUser = GoogleAuth.currentUser.get();

          if (!eventBound) {
            GoogleAuth.isSignedIn.listen((isAuthenticated) => {
              authenticationChangeHandler(isAuthenticated, googleUser);
            });

            authenticationChangeHandler(
              GoogleAuth.isSignedIn.get(),
              googleUser,
            );

            eventBound = true;
          }

          resolve(GoogleAuth);
        });
    });
  });
};

const authenticationChangeHandler = (isAuthenticated, googleUser) => {
  if (isAuthenticated) {
    console.log('logged in', googleUser);
  } else {
    console.log('not logged in');
  }
};
