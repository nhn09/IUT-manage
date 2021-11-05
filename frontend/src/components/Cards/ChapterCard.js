import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';

const ChapterCard = (props) => {
    const{coursecode,title} = props
    const history = useHistory();
    const {url}= useRouteMatch();
  
  
  const deleteHandler=(props)=>{
    console.log(`key-${JSON.stringify(props)}`);}

    return (
        <div class="bg-white p-10 grid grid-cols-3 md:grid-cols-4 rounded-lg shadow-md m-6">
        <div className='md:col-span-3 col-span-2'>
        <h1 class="text-xl font-bold">{title}</h1>
        <h3 class="text-xs uppercase">Lesson</h3>
        <h2 class="tracking-wide">
        {props.name}
          <br />
          {props.date}
        </h2>
        </div>
        <div className='justify-self-end'>
          <button onClick={()=>{deleteHandler(props.topic._id)}}  className='rounded-full w-10 h-10 bg-gray-700 '></button>
        </div>
        <button style={{ visibility: props.topic.isCompletedByTeacher? 'visible': 'hidden'}} 
        className="bg-orange-400 py-3 text-left mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Download pdf</button>
      </div>
    )

}

export default ChapterCard










    
