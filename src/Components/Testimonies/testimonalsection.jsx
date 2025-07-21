import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const [expandedIndex,setExpandedIndex] =useState(null)

  const toggleReadMore = (index) => {
      setExpandedIndex(prevIndex => prevIndex === index ? null : index)
  }
  const testimonials = [
    {
      name: "Manu",
      role: "UI/UX Designer",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      image: "/Images/Mannu.png"
    },
    {
      name: "Akhil Reddy",
      role: "Software Engineer At Recro",
      text: "Bosscoder academy made me a complete software engineer ",
      image: "/Images/Akhil Reddy icon.png"
    },

    { 
      name: "Rakesh Kumar",
      role: "Software Engineer At Recro",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ",
      image: "/Images/Rakesh.icon.png"
    } 
  ];
  
  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:4000,
        arrows:true,
        responsive: [
           {
            breakpoint : 768,  // mobile
            settings: {
              slidesToShow:1
            }
           },
          { breakpoint: 1024, // Tablet
            settings : {
              slidesToShow :2
            } 
        },
          { breakpoint:1280, // desktop large
            settings : {
              slidesToShow : 3
            } 
          }
      ]
};

  return (
    <section className="w-full bg-blue-50">
      {/* Heading */}
      <div className='py-6 px-6 text-center'>
        <h1 className='text-4xl mb-2'>Get Inspired by someone like you</h1>
        <p className='text-xl text-gray-600'>Who is now living their dream at top-tech companies</p>
      </div>

      {/* Cards */}
      
      <div className='px-2 '>
        <Slider {... settings}>
        {testimonials.map((person, index) => (

          <div  key={index}  
          className="px-3">

           <div className='bg-white border border-blue-500 rounded-lg shadow-lg p-6 max-w-md w-full text-left max-h-3/6 ' >
            {/* Image and Name */}

            <div className='flex items-center space-x-4 mb-4'>
              <img
                src={person.image}
                alt={person.name} 
                className='h-20 w-20 object-cover rounded-full'
              />
              <div>
                <h2 className='font-semibold text-lg'>{person.name}</h2>
                <p className='text-sm text-gray-500'>{person.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
        <p className='text-gray-700 text-sm mb-3'>
            {expandedIndex === index 
            ? person.text
            : `${person.text.slice(0,50)}...`
          }   
        </p>
               
            {/* Read More */}
                <p 
                onClick= {() => toggleReadMore(index)}
                className='text-right text-blue-600 text-sm cursor-pointer hover:underline'
                >
                  {expandedIndex === index ? 'show less' : 'Read more'}
                </p>
          </div>
          </div>
            
        ))}
              </Slider>
         
      </div>


        <div className='mt-10 text-center  '>
          <button className='mt-10 border border-blue-400 px-10 py-2 text-xl text-blue-600 font-semibold bg-white rounded-md hover:bg-blue-500 hover:text-white transition'>READ MORE REVIEWS</button>
          <img src="/Images/top button.png"  className='ml-auto  h-20 w-20'></img>
        </div>
     
    </section>
  );
};

export default TestimonialSection;
