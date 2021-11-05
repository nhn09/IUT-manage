import axios from 'axios';
import React, { useState } from 'react';



const AddChapter= () => {

const [submit,setSubmit]= useState({

        name:"",
        isCompletedByTeacher:false,
        date:0,
    })

    const submitHandler=(e)=>{
e.preventDefault();
console.log(submit)
axios.post(`http://localhost:5000/courses`, submit)
.then(response => console.log(response))

    }

    
    return (
        <div className=' justify-center flex  '>
       
  
        <form onSubmit={submitHandler} class=" md:w-1/2 shadow-2xl   p-3" action="#" >
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md   p-3">
            <div class="grid gap-6">

                <div class="col-span-12 p-3">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input onBlur={e=>{setSubmit({...submit,name:e.target.value})}} type="text" name="name" id="name" autocomplete="name" required class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12 p-3">
                    <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                    <input onBlur={e=>{setSubmit({...submit,date:e.target.value})}} type="date" name="date" id="date"  class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>


                <div class="col-span-12 p-3">
                    <label for="isCompletedByTeacher" class="block text-sm font-medium text-gray-700">is Completed?</label>
                    <input onChange={e=>{setSubmit({...submit,isCompletedByTeacher:e.target.checked?true:false})}}  type="checkbox" name="isCompletedByTeacher" id="isCompletedByTeacher" required className="mt-1 p-2 focus:ring-indigo-500 h-6 block checked:bg-blue-600 checked:border-transparent w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
           

                </div>


            </div>
        </div>


        <div className='flex justify-center'>
            <button type="submit" class="group p-3 relative w-1/2  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ">

             Submit
            </button>
        </div>
    </form>
        </div>

    )
}

export default AddChapter
