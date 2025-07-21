import React from 'react'

const Support = () => {
  return (
    <section className='mt-20 bg-blue-50'>
        <div className='flex flex-col w-full justify-center items-center m-10'>
            <h1  className='text-4xl font-normal mt-20 p-5 '>Placement And Career Support</h1>
            <p className='text-2xl max-w-md text-center'>Helping students get exposed to a world opportunities</p>

        </div>

          <div className='flex justify-around m-20'>
            <div className='border border-blue-300 drop-shadow-blue-800 bg-white p-5 max-w-56 h-96 flex flex-col items-center'>
                   <img src="/Images/Screenshot (26) 1.png" className='size-20' />
                   <h1 className="font-bold text-center text-2xl">Career Portfolio Optimization</h1>
                   <p className="text-center mt-6 font-normal">Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</p>
             
            </div>
    
            <div className='border border-blue-300 drop-shadow-blue-800 bg-white p-5 max-w-56 h-96 flex flex-col items-center'>
                   <img src="/Images/Screenshot (25) 1.png" className='size-20' />
                   <h1 className="font-bold text-center text-2xl">Extensive Support by Alumni-Mentor Network</h1>
                   <p className="text-center mt-6 font-normal">Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies </p>
             
            </div>
    
            <div className='border border-blue-300 drop-shadow-blue-800 bg-white p-5 max-w-56 h-96 flex flex-col items-center'>
                   <img src="public/Images/Screenshot (28) 1.png" className='size-20' />
                   <h1 className="font-bold text-center text-2xl">Placement Opportunities</h1>
                   <p className="text-center mt-6 font-normal">
Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</p>
             
            </div>
    
            <div className='border border-blue-300 drop-shadow-blue-800 bg-white p-5 max-w-56 h-96 flex flex-col items-center'>
                   <img src="/Images/Screenshot (26) 1.png" className='size-20' />
                   <h1 className="font-bold text-center text-2xl">Mock Interviews</h1>
                   <p className="text-center mt-6 font-normal">Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies</p>
             
            </div>
    
        </div>   


                 

        <div className='flex justify-between items-center '>
               <span></span>
            <button className='text-center border border-blue-500 flex px-8 py-3 rounded-md font-medium 
            text-3xl text-blue-700 bg-white hover:text-white hover:bg-blue-500 mb-10 cursor '> Know More
            </button>

            <img src='/Images/top button.png'  alt='Top Button'  className='size-20 items-center'></img>
        </div>
                        
    </section>

  )
}
 
export default Support
