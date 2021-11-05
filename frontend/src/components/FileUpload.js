import { post } from 'axios';
import React from 'react';

const Upload = () => {
    const uploadHandler=(e)=>{
        let files = e.target.files;
        // console.log(files[0].name);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{
            console.log(e.target.result);
            const formData = {file:e.target.result};
            const url = `url`;
            return post(url,formData)
            .then(res=>console.log(res))
        }
    }
    return (
        <div>
            
            <input type='file' name='file' onChange={(e)=>{uploadHandler(e)}}></input>
            
        </div>
    )
}

export default Upload


