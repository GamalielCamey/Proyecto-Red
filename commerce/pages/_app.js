import "../styles/index.scss";
import {SessionProvider} from "next-auth/react";
import Header from "../components/Header";

function MyApp({Component, pageProps}) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
