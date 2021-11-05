import React from 'react'
import Card from '../components/Card'
import Chartprofile from '../components/Chartprofile'
import SingleCard from '../components/SingleCard'


const Profile = () => {
    return (
    
      // <div class="container sm mx-auto">
      <div className="grid gap-8 lg:grid-cols-5 p-10 md:grid-cols-1  sm:grid-cols-1">
      <div className="col-span-2  ">
       <SingleCard />
      </div>
           
            <Chartprofile/>
      </div>
      //      
        


    )
}

export default Profile
