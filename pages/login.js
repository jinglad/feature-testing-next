import { GoogleLoginResponse, useGoogleLogin } from "react-google-login";
import {useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { signIn, loaded } = useGoogleLogin({
    clientId: `329377846205-jingeoks9a709gq29dunev6kfnv6o1ml.apps.googleusercontent.com`,
    isSignedIn: false,
    uxMode: "popup",
    scope: "profile email",
    accessType: "online",
    responseType: "token",

    onAutoLoadFinished: () => {
      var finished = "onAutoLoadFinished";
    },
    onSuccess: async (loginResponse) => {
      // setUser(loginResponse.profileObj);
      console.log(loginResponse);
      localStorage.setItem("test_token",loginResponse.accessToken);
      router.push(router.query.from && decodeURIComponent(router.query.from) ?? '/');
    },
    onFailure: (error) => {
      // console.log("onFailure", error);
      if (error.error === "idpiframe_initialization_failed") {
        console.log(error);
      }
    },
  });

  const token = typeof window !== "undefined" && localStorage.getItem('test_token');

  const signOut = () => {
    localStorage.removeItem('test_token');
    router.push("/");
  }

  return (
    <div>
      <h1>This is login Page</h1>
      <a onClick={token ? signOut : signIn} className={styles.button}>
        {token ? 'Logout' : 'Login'}
      </a>
    </div>
  );
}

export default LoginPage;
