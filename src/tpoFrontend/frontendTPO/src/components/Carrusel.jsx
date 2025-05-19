import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carrusel() {
  const slides = [
    {
      mensaje:"Todos tus productos saludables en un sólo lugar",
      url: '/pistachos.jpg',
      boton:"Compra ahora"
    },
    {
      mensaje:"Todos tus productos saludables en un sólo lugar",
      url: '/avellana.jpg',
      boton:"Compra ahora"
    },
    {
      mensaje:"Todos tus productos saludables en un sólo lugar",
      url: '/pistachos.jpg',
      boton:"Compra ahora"
    },

    {
      mensaje:"Todos tus productos saludables en un sólo lugar",
      url: '/almendras.jpg',
      boton:"Compra ahora"
    },
    {
      mensaje:"Todos tus productos saludables en un sólo lugar",
      url: '/nuez.jpg',
      boton:"Compra ahora"
    },
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
    <div className='w-full h-[780px]  pb-16 pt-0 '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[1520px] h-full rounded-2xl bg-center bg-cover duration-500'
      >
        <h1 className="text-green-80">${slides[currentIndex].mensaje}</h1>
        <button className="border-t-green-900 bg-green-900 text-white">${slides[currentIndex].boton}</button>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer'>
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
  );
}

export default Carrusel;