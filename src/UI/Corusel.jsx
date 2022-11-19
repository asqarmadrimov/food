import React from 'react'
import img1 from '../Utilst/images/carusel1.jpg'
import img2 from '../Utilst/images/carusel2.jpg'
import img3 from '../Utilst/images/carusel3.jpg'

const Corusel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide my-3" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100 rounded" alt="caruselImg" style={{maxWidth: '1200px', maxHeight: '500px'}}/>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100 rounded" alt="caruselImg" style={{maxWidth: '1200px', maxHeight: '500px'}}/>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100 rounded" alt="caruselImg" style={{maxWidth: '1200px', maxHeight: '500px'}}/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Corusel