// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";

// export const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   const handleLogin = async () => {
//     await loginWithRedirect({
//       appState: {
//         returnTo: "/profile",
//       },
//     });
//   };

//   return (
//     <button className="button__login" onClick={handleLogin}>
//       Log In
//     </button>
//   );
// };


import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
export default LoginButton;
