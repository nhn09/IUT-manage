import React from 'react'
import Background from '../images/iutbanner.jpg'

const HomePage = () => {

    
    return (
        <div>
<div style={{backgroundImage: `url(${Background})`}} className='w-full h-full bg-no-repeat bg-cover'>
    <div className='w-full h-full p-5 flex justify-center'> 
    <div>
    <h1 className='text-3xl font-bold text-white p-5 my-12' >Welcome to IUT sources</h1>
    <p className='w-1/2 text-white p-5 bg-gray-800 my-5 '>Islamic University of Technology, commonly known as IUT, is an international university located in Gazipur, Bangladesh. IUT offers undergraduate and graduate programmes in Engineering and Technical Education. The university is the only international Engineering university in Bangladesh.The 22nd ICFM held in Casablanca, Morocco on 10–11 December 1994 renamed the ICTVTR as Islamic Institute of Technology (IIT). IIT was formally inaugurated by Begum Khaleda Zia, prime minister of Bangladesh on 21 September 1995. The 28th ICFM held in Bamako, Republic of Mali on 25–29 June 2001 commended the efforts of IIT and decided to rename the IIT as Islamic University of Technology (IUT). IUT was formally inaugurated by Begum Khaleda Zia, prime minister of Bangladesh on 29 November 2001.</p>
  
    </div>
     </div>
</div>
        </div>
    )
}

export default HomePage
