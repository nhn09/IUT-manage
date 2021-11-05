import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import Card from "../components/Card";
import useSemester from '../hooks/useSemester';

const Semesterlist = () => {
    const {department} = useParams() ;
    const[semesters] = useSemester(department)
    const { path, url } = useRouteMatch();
    console.log(`path :${path},url :${url} param: ${department}`)

    
    return (
        <div>
           
        <h1 className='text-center font-bold p-3 '>Welcome to the Department of {department.toUpperCase()}</h1>
        <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
    {
    semesters.map((semester)=>{return(
    <Card  key={semester._id} number={semester.number} department={department}></Card> )
         })
    }
</div>
</div>
</div>
    )
}

export default Semesterlist
