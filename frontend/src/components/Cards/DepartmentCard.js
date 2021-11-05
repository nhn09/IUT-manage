import React from 'react';
import { useHistory } from 'react-router';

const DepartmentCard = (props) => {
    const history = useHistory();
    const ClickHandler = (e)=>{
      console.log(e)
        history.push(`/departments/${props.short}`);
        console.log(`clicking on department`);
    }
    return (
      
<div onClick={ClickHandler} class="cursor-pointer wrapper  antialiased text-gray-900   w-80 m-3 p-3 ">
<div>
    
    {/* <img src={props.source} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/>     */}
    <div className=" primary-bg-color hover:bg-gray-600 h-80 flex align-content p-4 rounded-lg shadow-md">
 <div class=" px-4   ">

   
   <div class="bg-white p-6 h-72  rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-gray-200  text-xs px-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
     {props.type}
      </span> 
    </div>
    
    <h4 class="mt-1 text-md font-semibold uppercase ">{props.title}</h4>
 
 
    <span class="text-gray-600 text-sm">{props.description}</span>

  <div class="mt-4">
    <span class="text-teal-600 text-md font-semibold">{props.HeadOfdept}</span>
    {/* <span class="text-sm text-gray-600">(based on 234 ratings)</span> */}
  </div>  

  </div>
 </div>
    </div>
  
</div>
 </div>
    )
}

export default DepartmentCard
