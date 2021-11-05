import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import ConfCard from './Cards/ConfCard';
import AddConference from './forms/AddConference';
const Conferences = () => {

    const [showform,setShowform] = useState(false)
    const [conf,setConf] = useState([]);

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

    const formShowHandler=()=>{
        
        setShowform(prev=> !prev
        )
        console.log(showform);
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/conferences`)
        .then(response=>{
                setConf(response?.data)
            })
        .catch( (error) => console.log(error));
    },[showform])

    return (
        <div>
      
        <div class="container my-12 mx-auto px-4 md:px-12">
           {  user && <div className='flex justify-center p-3 m-4'>
           {!showform &&   <button onClick={formShowHandler} className='bg-yellow-300 rounded-full w-12 h-12'> <FontAwesomeIcon size="2x" className='text-gray-700 ' icon={faPlus} /></button>}   
            </div>}
            <div>
                { showform && <AddConference setShowform={setShowform}/> }
            </div>
               <div class="grid grid-cols-1 md:grid-cols-3 grid-gap-4 -mx-1 lg:-mx-4">
               
             {
                  conf.map((conference)=>{return(
                   <ConfCard id={conference._id} where={conference?.location} name={conference?.title} when={conference?.date} about={conference?.description}cost={conference?.cost}/>
                  )})
               }

                   
               </div>
           </div>
   </div>
    )
}

export default Conferences
