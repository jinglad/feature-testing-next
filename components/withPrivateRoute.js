import React from 'react';
import Router from 'next/router';

const login = '/login'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  const token = typeof window !== "undefined" && localStorage.getItem('test_token');
  if (!token) {
    return { auth: null };
  } else return { auth: true };
  // change null to { isAdmin: true } for test it.
};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res.writeHead(302, {
          Location: `/login?from=${encodeURIComponent(context.asPath)}`
        });
        context.res.end();
      } else {
        Router.replace(`/login?from=${encodeURIComponent(Router.asPath)}`);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};