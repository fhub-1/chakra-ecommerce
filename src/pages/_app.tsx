import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "@/chakra/theme";
import Layout from "@/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraBaseProvider>
  );
}
