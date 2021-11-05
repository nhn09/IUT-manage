import React from 'react'

const SingleCard = (props) => {
    return (
          <article class="clickable rounded-lg shadow-lg">

            

                <header class="flex items-center justify-between p-4 md:p-4">
                    <h1 class="relative -my-6 text-lg rounded-full py-3 px-6 font-bold text-white bg-gray-700">
                        
                           Semester {props.number}
                    
                    </h1>
            
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                  
            
                        <p class="ml-2 text-sm">
                          Click to enter semester {props.number}
                        </p>
                    
               
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                
                </footer>

            </article>
    )
}

export default SingleCard
