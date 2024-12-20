import React from 'react'

export const Hero = () => {
  return (
    <div className='text-[#C1BAA1]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#E38E49] font-bold p-2'>MUSIC BRINGS HARMONY</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>SYMPHONY OF HOPE</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Who say, Music Classic Is Boring </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-[#E38E49]'>Musik menyentuh kita secara emosional, saat di mana kata-kata saja tidak bisa melakukannya</p>
        </div>
    </div>
  )
}

export default Hero;
