import React from 'react'

const Footer = () => {
  return (
    <section  className='w-full '>
       
         <footer className='m-25 flex justify-center space-x-20'>
                    <div>
                        <img src='/Images/Title.png'></img>
                    <div className='max-w-2xl'>
                        <p className='text-3xl  whitespace-normal break-words'>
                            Helping ambitious learners upskill themselves
                            & shift to top product based companies
                        </p>   
                    </div>
                    </div>

                    <div >
                        <h1 className='font-bold text-2xl text-blue-700'>About</h1>

                        <ul className='text-2xl space-y-5'>
                            <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>About Us</li>
                            <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Contact Us</li>
                            <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Term Of Use</li>
                            <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Refund Policy</li>
                            <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Privacy Policy</li>
                        </ul>

                    </div>

                    <div>
                      <h1 className='text-2xl text-blue-700'>UseFul Links</h1>

                      <ul className=' text-2xl space-y-5'>
                        <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Instagram</li>
                        <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Facebook</li>
                        <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Linkedin</li>
                        <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Telegram</li>
                        <li className='hover:underline transition-all duration-300 ease-in-out cursor-pointer'>Youtube</li>
                
                      </ul>
                    </div>
           </footer>  
      
    </section>
  )
}

export default Footer
