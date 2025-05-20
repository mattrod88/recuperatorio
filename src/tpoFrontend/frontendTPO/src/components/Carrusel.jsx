import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carrusel() {
  const slides = [
    {
      
      url: '/slide3.jpg',
      boton:"Compra ahora"
    },
   
    {
  
      url: '/especias.jpg',
      boton:"Compra ahora"
   
    },
     {
  
      url: '/imagen1.jpg',
      boton:"Compra ahora"
   
    }

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-full h-[700px]  pb-16 pt-0 '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
       <div className="absolute top-40 left-20  text-justify-left ">
      <h2 className="text-4xl font-bold text-lime-900 text-left mt-20 py-10 ">
        Productos<br/>saludables</h2>
         <button className="border-lime-900 mt-10 bg-lime-900 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded">
          {slides[currentIndex].boton}</button>
      
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Carrusel;