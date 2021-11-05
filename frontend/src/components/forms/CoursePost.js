import axios from 'axios';
import React, { useState } from 'react';


// name :
// {
//     type:String
// },
// isCompletedByTeacher:
// {
//     type:Boolean
// },
// date:{
//     type:Date






// semester:{
//  type:Number
// },
// chapters:[chaptersSchema]


const Backendcheck = () => {

    const [submit,setSubmit]= useState({

        totalEnrolled:0,
        title:'',
        coursecode:'',
        courseTeacher:'',
        description:'',
        rating:0,
        courseCreationDate:0,
        mail:'',
        semester:1,
        chapters:[
            {
                name:'',
                isCompletedByTeacher:false,
                date:0
            }
        ]
    })

    const submitHandler=(e)=>{
e.preventDefault();
console.log(submit)
axios.post(`http://localhost:5000/semesters/cse/1`, submit)
.then(response => console.log(response))

    }
    return (

        
        <div >
            <p>{JSON.stringify(submit)}</p>
            <div className='flex justify-center'>

            <form className='space-y-4 p-4 bg-gray-200' onSubmit={submitHandler} >
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md shadow-sm -space-y-px">
            <div class="grid gap-6">

            <div class="col-span-12">
                    <label for="coursecode" class="block text-sm font-medium text-gray-700">Course code</label>
                    <input onBlur={e=>{setSubmit({...submit,coursecode:e.target.value})}} type="number" name="title" id="coursecode"  required class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="mail" class="block text-sm font-medium text-gray-700">Email</label>
                    <input onBlur={e=>{setSubmit({...submit,mail:e.target.value})}} type="email" name="mail" id="mail"  required class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                    <input onBlur={e=>{setSubmit({...submit,title:e.target.value})}} type="text" name="title" id="title" autocomplete="title" required class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="courseCreationDate" class="block text-sm font-medium text-gray-700">Course Creation Date</label>
                    <input onBlur={e=>{setSubmit({...submit,courseCreationDate:e.target.value})}} type="date" name="courseCreationDate" id="courseCreationDate"  class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="rating" class="block text-sm font-medium text-gray-700">Rating</label>
                    <input onBlur={e=>{setSubmit({...submit,rating:e.target.value})}} 
                    type="number" 
                    name="rating" 
                    id="rating" 
                    class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="totalEnrolled" class="block text-sm font-medium text-gray-700">Total Enrolled</label>
                    <input onBlur={e=>{setSubmit({...submit,totalEnrolled:e.target.value})}}  type="number" name="totalEnrolled" id="totalEnrolled" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="description" class="block text-sm font-medium text-gray-700">description</label>
                    <input onBlur={e=>{setSubmit({...submit,description:e.target.value})}}  type="text" name="description" id="description" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-12">
                    <label for="courseTeacher" class="block text-sm font-medium text-gray-700">Course Teacher</label>
                    <input onBlur={e=>{setSubmit({...submit,courseTeacher:e.target.value})}}  type="text" name="courseTeacher" id="courseTeacher" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <hr/>
                <h3>Add one chapter( You can edit later)</h3>
                <div class="col-span-12">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name of the Chapter</label>
                    <input onBlur={e=>{setSubmit({...submit,name:e.target.value})}}  type="text" name="courseTeacher" id="courseTeacher" required className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

               
                <div class="col-span-12 flex">
                    <label for="isCompletedByTeacher" class="block text-sm font-medium text-gray-700"> isCompletedByTeacher</label>
                    <input  onBlur={e=>{setSubmit({...submit,  isCompletedByTeacher: e.target.checked ? true : false,})}}  type="checkbox" id="isCompletedByTeacher" required className=" checked:bg-blue-600 checked:border-transparent mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 w-6 h-6 rounded-md"/>
                </div>

                <div class="col-span-12 p-3">
              <label for="date" class="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                onBlur={(e) => {
                  setSubmit({ ...submit, date: e.target.value });
                }}
                type="date"
                name="date"
                id="date"
                class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
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
  
        </div>

    )
}

export default Backendcheck
