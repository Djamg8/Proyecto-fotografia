import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DropdownMenu from "./DropdownMenu";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      {!isAuthenticated && (
    <button className="Login"
     onClick={() => loginWithRedirect()}>Log In</button>
     )}
     {isAuthenticated &&
     <DropdownMenu/>
     }
    </div>
  );
};

export default LoginButton;