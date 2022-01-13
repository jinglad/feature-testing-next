import { useContext } from "react";
import TokenContext from "../../pages/_app";

export function requireAuthentication(gssp) {
  // const [accessToken, setAccessToken] = useContext(TokenContext);
  return async (context) => {
      const { req, res } = context;
      
      // console.log(req);
      // console.log(accessToken);
      // console.log(req);

      if (!token) {
          // Redirect to login page
          return {
              redirect: {
                  destination: '/login',
                  statusCode: 302
              }
          };
      }

      return await gssp(context); // Continue on to call `getServerSideProps` logic
  }
}