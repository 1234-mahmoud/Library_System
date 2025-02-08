import React from 'react'
import banner1 from '../imgs/banner1-scaled.webp'
import banner2 from '../imgs/banner2-scaled.webp'
import '../style/Banner.css'
export default function Banner() {
  return (
    <div className='banner'>
        <div className="ban">
            <img src={banner1} alt="" />
        </div>
        <div className="ban">
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}
