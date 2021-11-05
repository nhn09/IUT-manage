import axios from "axios";
import { useEffect, useState } from "react";

const useSemester =(department)=>{

    const[semesters,setSemesters]= useState([]);
 
    useEffect(()=>{
        axios.get(`http://localhost:5000/semesters/${department}`)
        .then(res=>setSemesters(res.data))
        .catch(err=>console.log(err))
    },[ ])

    return [semesters]
}

export default useSemester