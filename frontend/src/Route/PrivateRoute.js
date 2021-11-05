import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const [ user,
    setUser,
    Logout,
    signInWithGoogle,
    mailSignUp,
    mailLogin,
    goterror,
    setIsloading,
    Isloading] = useAuth();

 
  if (Isloading)
    return (
      <div class="flex justify-center items-center m-5 p-5">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
