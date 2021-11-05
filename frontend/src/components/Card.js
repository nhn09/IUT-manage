import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import SingleCard from './SingleCard';


const Card = (props) => {

    const {number,department} = props
        const history = useHistory();
        const {url}= useRouteMatch();
        const ClickHandler = (e)=>{
            history.push(`${url}/${number}`);
            console.log(`clicking on semester ${number}`);}

      
    
  
    return (
         <div onClick={ClickHandler} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
     <SingleCard number={number} department={department}/>

       
         
       
   </div>
    )
}

export default Card
