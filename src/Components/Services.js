import React from 'react'
import Title from './Title'
import { ServiceDetails } from '../Data'
import Service from './Service'
const Services = () => {
  return (
    <section className="section services" id="services">
    <Title title="our" subtitle="services"></Title>
    <div className="section-center services-center" > 
    {ServiceDetails.map((service)=>{
        return( 
        <Service key={service.id} {...service}></Service>
        )
    })}    
    </div>
  </section>
  )
}

export default Services
