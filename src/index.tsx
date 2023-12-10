import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./utils/GlobalStyle";
import { theme } from "./theme";
import { store, persistor } from "./Redux/Stores";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <PersistGate persistor={persistor}>
            <GlobalStyle />
            <App />
          </PersistGate>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
