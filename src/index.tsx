import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
