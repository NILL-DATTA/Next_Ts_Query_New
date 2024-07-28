import Wrapper from "@/Layout/Wrapper/Wrapper";
import { store } from "@/Toolkit/store";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Component {...pageProps} />
          <ToastContainer autoClose={1500} />
        </Wrapper>
      </QueryClientProvider>
    </Provider>
  );
}
