

  const About = () => {
    return (
      <main className='max-w-[1726px]  max-h-[1025px]' 
      style={{
      background:"linear-gradient(to right, #004AAD, #1E90FF)"
      }}
      >

        <div className=' mx-auto flex flex-col md:flex-row  items-center gap-12 text-white '>
          {/* Text */}
    <div className="flex-1 m-20 ">
            <h1 className='text-6xl font-bold mb-6 leading-tight '>Grab your <span className="text-black  ">Dream</span> tech offer today</h1>
          <ul className='list-disc   list-inside space-y-5 text-2xl m-10 '>
              <li>A highly structured, personalized and guided word-class program</li>
              <li>Designed by industry expertst</li>  
              <li>That will make you the best software developer out there</li>
              <li>For ambition learners, who don't want to settle for anything less in their tech careers </li>
          </ul>

          <button className="mt-6 bg-white text-blue-700 font-semibold rounded-md px-6 py-2 text-2xl ">Apply Now</button>
      </div>


          <div className="flex-1  flex justify-center items-center ">                              
                  <div className=" w-[800px] h-[800px] bg-blue-400 rounded-full">
                      <img src="/Images/Man and Woman.png" className="w-[700px] h-[600px] rounded-lg z-10"></img>

                  </div>
          </div>    
          

        </div>
      </main>
    )
  }

  export default About
