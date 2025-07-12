import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Manu",
      role: "UI/UX Designer",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      image: "/Images/Mannu.png"
    },
    {
      name: "Akhil Reddy",
      role: "Software Engineer At Recro",
      text: "Bosscoder academy made me a complete software engineer ...",
      image: "/Images/Akhil Reddy icon.png"
    },
    {
      name: "Rakesh Kumar",
      role: "Software Engineer At Recro",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint .....",
      image: "/Images/Rakesh.icon.png"
    }
  ];

  return (
    <section className="w-full bg-blue-50">
      {/* Heading */}
      <div className='py-6 px-6 text-center'>
        <h1 className='text-4xl mb-2'>Get Inspired by someone like you</h1>
        <p className='text-xl text-gray-600'>Who is now living their dream at top-tech companies</p>
      </div>

      {/* Cards */}
      <div className='flex flex-col md:flex-row justify-center gap-6 px-6 py-10'>
        {testimonials.map((person, index) => (
          <div
            key={index}
            className='bg-white border border-blue-500 rounded-lg shadow-md p-6 max-w-md w-full text-left'
          >
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
            <p className='text-gray-700 text-sm mb-3'>{person.text}</p>

            {/* Read More */}
            <p className='text-right text-blue-600 text-sm cursor-pointer hover:underline'>
              read more ...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
