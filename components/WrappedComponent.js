import Router from 'next/router';


const login = '/login?redirected=true';





export default WrappedComponent = () => {
  const checkUserAuthentication = () => {
    const token = localStorage.getItem('test_token');
    if(!token) {
      return { auth: null };
    }
  };
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;
  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    if (!userAuth?.auth) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
}

// export default WrappedComponent;
