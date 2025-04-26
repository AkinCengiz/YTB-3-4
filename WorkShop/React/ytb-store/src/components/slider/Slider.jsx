import React from 'react'
import "./Slider.css"

const Slider = () => {
  return (
    <section className='slider-wrapper'>
        <div className="slider-info">
            <p>Herkes için uygun trend ürünler...</p>
            <h2>İlkbahar - Yaz Kampanyası!!!</h2>
            <a href="/">Keşfet</a>
        </div>
        <div className="image-wrapper">
            <img src="/assets/images/campaigne2.png" alt="Kampanya" />
        </div>
    </section>
  )
}

export default Slider