import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const location = useLocation();
  const redirect_path = location?.state?.from || "/homepage";
  const history = useHistory();
  
  const[
    user,
    setUser,
    Logout,
    signInWithGoogle,
    mailSignUp,
    mailLogin,
    goterror,
   setIsloading,
   Isloading
  ]  = useAuth();

  const GoogleSignInHandler=()=>{
    signInWithGoogle()
    .then((result)=>{ setUser(result.user);
       history.push(redirect_path)})
       .catch((error)=>{alert(error.code)})
       .finally(()=> setIsloading(false))
  }
  const onSubmitForm = (data) => {
    mailLogin(data.Email, data.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        history.push(redirect_path);
      })
      .catch((error) => {
        alert(error.code);
      })
      .finally(()=> setIsloading(false))
    console.log(goterror);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div>
      <div className="flex justify-center p-4">
        <div class="w-full max-w-xs">
          <div  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form
           
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <label className="block text-gray-700 text-sm font-bold m-2">
                Email
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("Email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.Email?.type === "pattern" && (
                <p>Please enter valid email</p>
              )}
            </div>

            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold m-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*******"
                {...register("password", { required: true, minLength: 7 })}
              />
              {errors.password?.type === "minLength" && (
                <p>Password should be at least 7 characters long</p>
              )}
            </div>

            <div class="flex items-center justify-center">
              <input
                class="bg-yellow-400 hover:bg-yellow-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              />
             
            </div>
            <p className='flex justify-center py-6 items-center'>
                New User?{" "}
                <Link to="/signup">
                  {" "}
                  <button className=" mx-3 font-bold bg-gray-700 hover:bg-gray-900 rounded-full  py-1 px-2  text-white ">
                    Sign Up
                  </button>{" "}
                </Link>
              </p>
          </form>
          <hr/>
                <div class="flex items-center justify-center">
                    <button
                  
                      class="bg-yellow-400 mt-3 hover:bg-yellow-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={GoogleSignInHandler}>  Google Sign In</button>
                   
                  </div>
                  </div>

          <p class="text-center text-gray-500 text-xs">
            &copy;2021 LifeSpring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
