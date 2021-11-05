import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import useAuth from '../../hooks/useAuth';
const ConfCard = (  {where,name,when,about,cost,id} ) => {

const deleteConf = ()=>{
console.log(id);
axios.delete(`http://localhost:5000/conferences/${id}`)
.then(res=> alert('deleted'))
.catch(err=>console.log(err))
}
   
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
   
    return (
        <div class="p-10">  
      
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{name}</div>  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{where}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{when}</span>
            <p class="text-gray-700 text-base">
                {about}
            </p>
          </div>
          <div class="px-6 pt-4 pb-4">
            {user &&  <button onClick={deleteConf}><FontAwesomeIcon size="2x" className='text-gray-700 ' icon={faTrash} /></button> }
        
          </div>
        </div>
      </div>
    )
}

export default ConfCard

