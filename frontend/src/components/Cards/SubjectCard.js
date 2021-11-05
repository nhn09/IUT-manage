import React from "react";
import { useHistory, useRouteMatch } from 'react-router';

const SubjectCard = (props) => {
  const{coursecode,title} = props
  const history = useHistory();
  const {url}= useRouteMatch();
  const clickHandler = (e)=>{
            history.push(`${url}/${coursecode}`); 
            console.log(`clicking on course ${coursecode}`);}


    return (
        
        <div onClick={clickHandler} class="bg-white p-10 rounded-lg shadow-md m-6">
          <h1 class="text-xl font-bold">{title}</h1>
          <h3 class="text-xs uppercase">Lesson</h3>
          <h2 class="tracking-wide">
          {props.name}
            <br />
            {props.date}
          </h2>
  
        
        </div>
      
    )
}

export default SubjectCard





    
