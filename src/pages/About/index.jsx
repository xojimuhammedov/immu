import React from 'react'
import Hero from './_components/Hero'
import Font from './_components/Font'
import Vidio from './_components/Vidio'
import Carousel from './_components/Carousel'

const index = () => {
  return (
    <div className='flex flex-col gap-3'>
        <Hero/>
        <Font/>
        <Vidio/>
        <Carousel/>
    </div>
  )
}

export default index