import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

  const history= useHistory()
    const [user, setUser, Logout, signInWithGoogle, mailSignUp, mailLogin,goterror,setIsloading,Isloading] = useAuth()

    const GoogleSignInHandler=()=>{
      signInWithGoogle()
      .then((result)=>{history.push('/')})
      .finally(()=> setIsloading(false))
    }

    const onSubmitForm=(data)=>{
        if(mailSignUp(data.Email,data.password,data.Name)!=undefined){
          mailSignUp(data.Email,data.password,data.Name)
          .then(() =>{ history.push('/homepage')})
          .finally(()=> setIsloading(false))
      
      }

      else if(goterror!=null) { alert(goterror)}
        
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return(
        <div>
                <div className="flex justify-center p-4">
              <div class="w-full max-w-xs">
               <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <form
                
                  onSubmit={handleSubmit(onSubmitForm)}
                >
                  <div>
                  <label className="block text-gray-700 text-sm font-bold m-2">Email</label>
              <input
                type="text"
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                {...register("Email", {
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
                {errors?.Email?.type === "pattern" && (
                      <p>Please enter valid email</p>
                    )}
                  </div>
                  <div>
                    <label
                      class="block text-gray-700 text-sm font-bold m-2"
                      for="Name"
                    >
                      Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="Name"
                      {...register("Name", {
                        pattern: /^[a-zA-Z]+( [a-zA-Z]+)*$/i,
                        required: true,
                        maxLength: 20,
                      })}
                    />
                    {errors?.Name?.type === "required" && (
                      <p className="text-sm bg-red-200 text-red-700">
                        This field is required
                      </p>
                    )}
                    {errors?.Name?.type === "maxLength" && (
                      <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.Name?.type === "pattern" && (
                      <p>Alphabetical characters only</p>
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
                      value='Sign In'
                    />
                  </div>
                  <div className='flex font-bold  justify-center text-gray-700 bg-gray-200 rounded-full m-3  px-3 py-1 items-center'>
                <p >Already have account?</p>
                <Link to="/login">
                  {" "}
                  <button className=" mx-3 font-bold bg-gray-500 hover:bg-gray-700 rounded-full py-1 px-7  text-white ">
                   Log In
                  </button>{" "}
                </Link>
              </div>
            
              
                </form>

                <hr/>
                <div class="flex items-center justify-center">
                    <button
                  
                      class="bg-yellow-400 mt-3 hover:bg-yellow-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={GoogleSignInHandler}>  Google Sign In</button>
                   
                  </div>
               </div>
               
                
                <p class="text-center text-gray-500 text-xs">&copy;2021 LifeSpring.</p>
             
              </div>
            </div>
      
      
        </div>
      );
}

export default SignUp














