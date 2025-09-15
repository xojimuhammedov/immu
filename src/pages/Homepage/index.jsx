import React from 'react'
import Hero from './_components/Hero'
import Fond from './_components/Fond'
import News from './_components/News'
import TeamMembers from './_components/Member'
import Partners from './_components/Partners'
import Media from './_components/Media'
import Workshop from './_components/Workshop'
const index = () => {
  return (
   <div className='p-3'>
     <Hero/>
     <Fond/>
     {/* <News/> */}
     <TeamMembers/>
     {/* <Partners/> */}
     {/* <Media/> */}
     <Workshop/>
   </div>
  )
}

export default index