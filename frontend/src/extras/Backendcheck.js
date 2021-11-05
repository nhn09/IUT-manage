import axios from 'axios';
import React, { useState } from 'react';

const Backendcheck = () => {

    const [submit,setSubmit]= useState({
        title:"",
        HeadOfdept:"",
        type:"",
        description:""
    })

    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     const departmentInfo = 
    //     submit;
      
    // }, []);

    const submitHandler=(e)=>{
e.preventDefault();
console.log(submit)
axios.post(`http://localhost:5000/departments`, submit)
.then(response => console.log(response))

    }
    return (
        <div>
            <p>{JSON.stringify(submit)}</p>
        <form onSubmit={submitHandler} class="space-y-4" action="#" >
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md shadow-sm -space-y-px">
            <div class="grid gap-6">

                <div class="col-span-12">
                    <label for="title" class="block text-sm font-medium text-gray-700">title</label>
                    <input onBlur={e=>{setSubmit({...submit,title:e.target.value})}} type="text" name="title" id="title" autocomplete="title" required class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="type" class="block text-sm font-medium text-gray-700">type</label>
                    <input onBlur={e=>{setSubmit({...submit,type:e.target.value})}}  type="text" name="type" id="type" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="description" class="block text-sm font-medium text-gray-700">description</label>
                    <input onBlur={e=>{setSubmit({...submit,description:e.target.value})}}  type="text" name="description" id="description" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="HeadOfdept" class="block text-sm font-medium text-gray-700">Head Of Department</label>
                    <input onBlur={e=>{setSubmit({...submit,HeadOfdept:e.target.value})}}  type="text" name="HeadOfdept" id="HeadOfdept" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>


            </div>
        </div>


        <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

             Submit
            </button>
        </div>
    </form>
        </div>

    )
}

export default Backendcheck
