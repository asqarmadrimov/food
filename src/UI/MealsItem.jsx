import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const MealsItem = ({ item }) => {

  const[like, setLike] = useState(false);

  const hendelBtn = () =>{
    setLike(true)
    localStorage.setItem('food', JSON.stringify(item))
  }
  


  return (
    <li key={item.idMeal} className="card mx-auto my-2 p-2 bg-ligh position-relative" style={{ width: '22rem' }}>
      <img src={item.strMealThumb} className="card-img-top" alt={item.strMeal} />
      <div className="card-body">
        <h5 className="card-title layout display-6 meal-title" style={{ height: '70px' }}>{item.strMeal}</h5>
        <div className="d-flex aling-items-center justify-content-between">
          <Link to={`/meals/${item.idMeal}`} className='btn btn-secondary bottom-0'>Composition</Link>
          <button className={like ? 'btn btn-light text-danger' : 'btn btn-secondary text-white'} onClick={hendelBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  )
}

export default MealsItem