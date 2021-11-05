import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DepartmentCard from '../components/Cards/DepartmentCard'
import sourceCse from '../images/department_cse.jpg'


const DepartmentPage = () => {
    const [departments,setDepartments] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/departments`)
        .then(res=>setDepartments(res?.data?.department))
        .catch(err=>console.log(err))
    },[]) 
    return (
        <div>
        <div class="container my-8 mx-auto px-4 md:px-12">
                  <div class="flex flex-wrap md:mx-1 lg:mx-2">

                    {
                        departments.map((department)=>{return(
                            <DepartmentCard source={sourceCse} type={department.type} title={department.title} description={department.description} short={department.short} HeadOfdept = {department.HeadOfdept}></DepartmentCard>
                        )

                        })
                    }
                        
                      
                  </div>
              </div>
      </div>
    )
}

export default DepartmentPage
