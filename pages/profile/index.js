import withPrivateRoute from "../../components/withPrivateRoute";
// import WrappedComponent from "../../components/WrappedComponent";

const profilePage = () => {
  return (
    <div>
      <h1>This is private route</h1>
    </div>
  )
}

export default withPrivateRoute(profilePage);


// export const getServerSideProps = requireAuthentication(
//   async (ctx) => {
//     return {
//       props: {}
//     }
//   }
// )