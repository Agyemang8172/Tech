
const Navbar = () => {
  return( 
    <nav className="bg-white max-w-[1728px]  max-h-[106px]">
       <div className="w-full container mx-auto flex items-center justify-between px-4 h-24 ">
      <div className="w-[259.8px] h-[100px]">
        <img src="/Images/Title.png"  className="w-[239px] h-[90px]"></img>
      </div>
                                        
         {/* List Items */}

      <div className=" hidden md:flex space-x-10 ">
         <a href=""  className="text-2xl hover:text-blue-500  underline hover:underline-offset-4 transition-all duration-400 ease-in-out">Programs</a>
         <a href="" className="text-2xl hover:text-blue-500  underline hover:underline-offset-4 transition-all duration-400 ease-in-out">Reviews</a>
         <a href="" className="text-2xl hover:text-blue-500  underline hover:underline-offset-4 transition-all duration-400 ease-in-out">Features</a>
         <a href="" className="text-2xl hover:text-blue-500  underline hover:underline-offset-4 transition-all duration-400 ease-in-out">Teaching</a>
      </div>
      <button className="border font-semibold p-3 rounded-md text-xl text-blue-500 hover:text-blue-600">
        Free Masterclasses
      </button>
      </div> 
    </nav> 
       
    )
  
};

export default Navbar;
