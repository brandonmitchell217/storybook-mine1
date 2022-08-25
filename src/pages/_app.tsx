import type { AppProps } from "next/app";
import App from "../App";
import { Header } from "../components/Header/Header";
import "../index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <App />
    </>
  );
}
