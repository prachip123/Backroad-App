import React from 'react'
import Title from './Title'
import {ToursDetails} from '../Data'
import Tour from './Tour'
const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title title="featured" subtitle="tours"></Title>
    <div className="section-center featured-center">
       {ToursDetails.map((tour)=>{
        return(
       <Tour key={tour.id}{...tour}></Tour>   
        )
       })}     
    </div>
  </section>
  )
}

export default Tours
