import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../images/logo.png";


const Header = () => {
  const [
    user,
    setUser,
    Logout,
    signInWithGoogle,
    mailSignUp,
    mailLogin,
    goterror,
  ] = useAuth();
  const history = useHistory();
  const loginRouteHandler = () => {
    history.push("/login");
  };

  const HomeRouteHandler = () => {
    history.push("/");
  };

  const BookRouteHandler = () => {
    history.push("/departments");
  };

  const confRouteHandler = () => {
    history.push("/conferences");
  };
  return (
    <div className=" bg-gray-700 flex items-center w-full  md:h-24">
      <div className=" md:grid gap-4  md:grid-cols-8 px-1 md:w-full">
 
        <div
        
          className=" w-full flex p-4 md:col-start-1 md:col-end-2 md:col-span-2"
        >     <img className='h-12' src={logo}></img>
        <button   onClick={HomeRouteHandler} className=' px-2 text-2xl text-yellow-400 font-extrabold'> Source </button>
        </div>
        <button
          onClick={HomeRouteHandler}
          className="  w-full  md:col-start-3 p-3 text-gray-400 rounded hover:bg-gray-600"
        >
          Home
        </button>
        <button
          onClick={BookRouteHandler}
          className="  w-full  md:col-start-4 p-3 text-gray-400 rounded hover:bg-gray-600"
        >
          Departments
        </button>
        <button
          onClick={confRouteHandler}
          className="w-full  p-3 text-gray-400 rounded hover:bg-gray-600"
        >
          Conferences
        </button>

        {user ? (
          <button
            onClick={Logout}
            className=" w-full p-4 text-gray-400 rounded hover:bg-gray-600"
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={loginRouteHandler}
            className="w-full p-4 text-gray-400 rounded hover:bg-gray-600"
          >
            LogIn
          </button>
        )}

        {user && (
          <div className="w-full items-center flex justify-center md:col-span-2 font-medium p-4 text-gray-400 rounded ">
            <p className="mx-3"> {user.displayName}</p>
           {user.photoURL &&  <img className="rounded-full w-12 h-12" src={user.photoURL} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
