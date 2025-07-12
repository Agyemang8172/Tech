
const Navbar = () => {
  return( 
    <nav className="bg-white max-w-[1728px]  max-h-[106px]">
       <div className="w-full container mx-auto flex items-center justify-between px-4 h-24">
      <div className="w-[259.8px] h-[100px]">
        <img src="/Images/Title.png"  className="w-[239px] h-[90px]"></img>
      </div>
                                        
         {/* List Items */}

      <div>
          <ul className="flex space-x-8 ">
            <li className="text-xl font-poppins hover:text-blue-700 ">Programs</li>
            <li className="text-xl font-poppins hover:text-blue-700 ">Reviews</li>
            <li className="text-xl font-poppins hover:text-blue-700 ">Features</li>
            <li className="text-xl font-poppins hover:text-blue-700 ">Teaching</li>
          </ul>
      </div>
      <button className="border font-semibold p-3 rounded-md text-xl text-blue-500 hover:text-blue-600">
        Free Masterclasses
      </button>
      </div> 
    </nav> 
       
    )
  
};

export default Navbar;
