import useErrorBoundary from "use-error-boundary";
import { ThemeProvider } from "styled-components";
import theme from "utils/constants/theme";
import { Provider } from "react-redux";
import { store } from "redux/store";
import GlobalStyles from "utils/constants/global-styles";
import MyRoutes from "routes";

import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }: any) {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <>
      {didCatch ? (
        <h4>An error has been caught: {error.message}</h4>
      ) : (
        <ErrorBoundary>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <GlobalStyles />
              <Heading level={4}>Hello {user.username}</Heading>
              <Button onClick={signOut}>Sign out</Button>
              <MyRoutes />
            </Provider>
          </ThemeProvider>
        </ErrorBoundary>
      )}
    </>
  );
}

export default withAuthenticator(App);
