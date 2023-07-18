import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/form.css";
import "../styles/map.css";
import "../styles/pages.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
