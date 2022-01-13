// import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { useEffect } from "react";
// import PaypalButton from "../components/PaypalButton";
// import PayPalBtn from "../components/PayPalBtn";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { TokenContext } from "./_app";
import Head from "next/head";
import Script from "next/script";
// import "/pollfishConfig.js";
// import {name} from "/pollfishConfig.js";
import Recorder from "../components/mp3-recording";
import ClassRecorder from "../components/ClassRecorder";

const Home = () => {
  // const addPaypalScript = () => {
  //   const script = document.createElement("script");
  //   script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&vault=true`;
  //   script.type = "text/javascript";
  //   script.async = true;
  //   document.body.appendChild(script);
  // };

  // const addJquery = () => {
  //   const script = document.createElement('script');
  //   script.src = "https://storage.googleapis.com/pollfish_production/sdk/webplugin/pollfish.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

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
  // },[]);

  // useEffect(() => {
  //   addPaypalScript();
  // }, []);

  // const paypalSubscribe = (data, actions) => {
  //   return actions.subscription.create({
  //     plan_id: "P-9JB85853BU947321XMG43WMI",
  //   });
  // };
  // const paypalOnError = (err) => {
  //   console.log("Error");
  // };
  // const paypalOnApprove = (data, detail) => {
  //   // call the backend api to store transaction details
  //   console.log("Payapl approved");
  //   console.log(data.subscriptionID);
  // };

  const token =
    typeof window !== "undefined" && localStorage.getItem("test_token");
  const [accessToken, setAccessToken] = useContext(TokenContext);

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  // console.log(name);

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        {/* <PayPalScriptProvider
          options={{
            "client-id":
              "ARK_DuOzMhe1kZFRBTNxTAT92lx7Xv4gJsV7wcArjnOEVx5Dk_pTbwo60tkBNrgC5pMJOF1fhrsXlDOY",
            components: "buttons",
            intent: "subscription",
            vault: true,
          }}
        >
          <PaypalButton type="subscription" />
        </PayPalScriptProvider> */}
        {/* <PayPalBtn
          amount="5"
          currency="USD"
          createSubscription={paypalSubscribe}
          onApprove={paypalOnApprove}
          catchError={paypalOnError}
          onError={paypalOnError}
          onCancel={paypalOnError}
        /> */}
        <Link href="/profile">
          <a>Profile Page</a>
        </Link>
      </div>
      <div className={styles.button}>
        <Link href="/login">
          <a>Login Page</a>
        </Link>
      </div>
      {/* <Recorder /> */}
      <ClassRecorder />
    </div>
  );
};

export default Home;
