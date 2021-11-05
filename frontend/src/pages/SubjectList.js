import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import SubjectCard from '../components/Cards/SubjectCard';
import AddCourse from '../components/forms/AddCourse';
import useAuth from '../hooks/useAuth';

const SubjectList = () => {
    const {  url } = useRouteMatch();
    let urlArray = url.split( '/' );
//    console.log(`path :${path},url :${url}, url array : ${urlArray} `)
   const department = urlArray[2]
     const [subjects,setSubjects] = useState([]);
     const [showform,setShowform] = useState(false)
    const {id} = useParams() ;

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

    useEffect(()=>{
        axios.get(`http://localhost:5000/semesters/${department}/${id}`)
        .then(res=>setSubjects(res.data))
        .catch(err=>console.log(err))
    },[showform ])

    const formShowHandler=()=>{
        
        setShowform(prev=> !prev
        )
        console.log(showform);
    }


    const submitHandler=(value)=>{
        axios.post(`http://localhost:5000/semesters/${department}/${id}`, value)
          .then(response=>{
              if((response.data?.message)=="Course already exists."){
                  alert(JSON.stringify(response.data.message))
                 
              }
              else{
                alert('Course successfully added.')
                setShowform(false)
              }
          } )
          .catch( (error) => console.log(error));
    }
       
    

 
    return (
        <div>
      
             <div class="container my-12 mx-auto px-4 md:px-12">
                { user &&  <div className='flex justify-center p-3 m-4'>
                {!showform &&   <button onClick={formShowHandler} className='bg-yellow-300 rounded-full w-12 h-12'> <FontAwesomeIcon size="2x" className='text-gray-700 ' icon={faPlus} /></button>}   
                 </div>}
                 <div>
                     { showform && <AddCourse semester={id}submitHandler={submitHandler}/> }
                 </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 grid-gap-4 -mx-1 lg:-mx-4">
                    
                  {
                       subjects.map((subject)=>{return(
                        <SubjectCard coursecode={subject.coursecode}  title = {subject.title}/>
                       )})
                    }

                        
                    </div>
                </div>
        </div>
    )
}

export default SubjectList
