import React from 'react'

const Services = () => {
  return (
    <div className='m-20 max-w-[1724px] max-h-[2597px]'>
        <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-5xl m-2'>
                Our Programs
            </h1>
        </div>

       <div className='max-w-xl text-center mt-2 mb-6 '>
           <p className='text-2xl'>
                Ace Your Skills In Problem Solving In DSA, 
                System Design And Developement
           </p>
       </div>
     
                        {/*   For Students   */} 
       <div className='max-w-5xl  flex flex-col justify-center items-center border border-blue-700 
       shadow-sm bg-blue-50 rounded-xl '>

       
          <img src="/Images/Students.png" className='object-cover w-full '></img>   
           
            <div className='m-5'>
             <p className='text-5xl '>For Collage students</p>
            </div>

            <div className='m-3 text-center max-w-xl'>
               <p className='text-2xl'>
                Who want to rocket-start their career 
                and get placed in thier dream companies
                </p>
            </div>
          
              <button className='border border-blue-600  hover:bg-blue-100 text-blue
              px-6 py-3 rounded-lg
              flex items-center gap-6 transition duration-300 mt-15 mb-10'> 
                <span className='font-medium text-2xl text-blue-600'>View Programs</span>
                <img src="/Images/entypo_arrow-long-right.png" alt="arrow right" className='w-8 h-8'/>
              </button>
           </div>
                     
             
             
                  <img src="/Images/top button.png" className='ml-auto w-15 h-15'/>
               
                

           {/* For Professionals */}
       
       <div className='max-w-5xl  flex flex-col justify-center items-center border border-blue-700 
       shadow-sm bg-blue-50 rounded-xl overflow-hidden'>

       <div className='overflow-hidden rounded-t-xl'>
          <img src="/Images/Professionals.png" className='object-cover w-full rounded-sm'></img>   
       </div>     
            <div className='m-5'>
             <p className='text-5xl '>For Working Proffessionals</p>
            </div>

            <div className='m-3 text-center max-w-xl'>
               <p className='text-2xl'>
                Who wish to shift to top product based companies and ace thier tech careers
                </p>
            </div>
          
              <button className='border border-blue-600  hover:bg-blue-100 text-blue
              px-6 py-3 rounded-lg
              flex items-center gap-6 transition duration-300 mt-15 mb-10'> 
                <span className='font-medium text-2xl text-blue-600'>View Programs</span>
                <img src="/Images/entypo_arrow-long-right.png" alt="arrow right" className='w-8 h-8'/>
              </button>
          
       </div>
      </div>
    </div>
  )
}

export default Services
