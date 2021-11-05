import React, { useState } from 'react';
import logo from '../images/logo.png';

const SignCard = () => {

    const [emailInput,setEmailInput ] = useState('')
    const [passwordInput,setPasswordInput ] = useState('')
    const [error, setError]=useState('')

    const submitHandler=(e)=>{
       e.preventDefault();
      if( passwordInput.length<6)
      return;
     
    }

    const passwordChangeHandler=(e)=>{
        setPasswordInput(e.target.value)
       
    }
    const securityCheck=(e)=>{
        if( e.target.value.length<6)
        {setError('Password must be at least 6 character long. '); }
        else{setError('')}
       
    }

    const emailChangeHandler=(e)=>{
       setEmailInput(e.target.value)
    }
    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full space-y-8">
			<div>
				<img class="mx-auto h-28 w-auto" src={logo} alt="Logo"/>
				<h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
					Sign in to your account
				</h2>
				
			</div>

			<div class="rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">

				<form onSubmit={submitHandler} class="space-y-4" action="#" method="POST">
					<input type="hidden" name="remember" value="true"/>
					<div class="rounded-md shadow-sm -space-y-px">
						<div class="grid gap-6">

							<div class="col-span-12">
								<label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
								<input onBlur={emailChangeHandler} type="email" name="email_address" id="email_address" autocomplete="email" required class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
							</div>

                            <div class="col-span-12">
                                {error && <div class="border border-t-2 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700">
    <p>{error}</p></div> }
								<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
								<input onChange={securityCheck} onBlur={passwordChangeHandler} type="password" name="password" id="password" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
							</div>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
							<label for="remember_me" class="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>

						<div class="text-sm">
							<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot your password?
							</a>
						</div>
					</div>


					<div>
						<button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span class="absolute left-0 inset-y-0 flex items-center pl-3">
						
								<svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
								</svg>
							</span>
							Sign in
						</button>
					</div>
				</form>
		</div>
	</div>
    </div>
    )
}

export default SignCard
