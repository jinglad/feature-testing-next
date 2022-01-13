import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";
import Script from "next/script";
import {addJquery,addPollfish,addPollfishConfig} from "../components/externalScript/external";

export const TokenContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState(null);



  // const addPollfishConfig = () => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   var pollfishConfig = {
  //     api_key: "api_key_goes_here",
  //     debug: true
  //   };
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

  // useEffect(() => {
  //   addJquery();
  //   addPollfishConfig();
  //   addPollfish();
  // },[]);

  return (
    <TokenContext.Provider value={[accessToken, setAccessToken]}>
       <>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> */}
        {/* <Script src="/pollfishConfig.js"></Script>
        <Script src="https://storage.googleapis.com/pollfish_production/sdk/webplugin/pollfish.min.js"></Script> */}
      </>
      <Component {...pageProps} />
    </TokenContext.Provider>
  );
}

export default MyApp;
