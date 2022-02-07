import useErrorBoundary from "use-error-boundary";
import { ThemeProvider } from "styled-components";
import theme from "utils/constants/theme";
import { Provider } from "react-redux";
import { store } from "redux/store";
import GlobalStyles from "utils/constants/global-styles";
import MyRoutes from "routes";

function App() {
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
              <MyRoutes />
            </Provider>
          </ThemeProvider>
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
