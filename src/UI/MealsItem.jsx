import React from 'react'
import { Link } from 'react-router-dom';

const MealsItem = ({item}) => {
  return (
    <li key={item.idMeal} className="card mx-auto my-2 p-2 bg-ligh position-relative" style={{width: '22rem'}}>
        <img src={item.strMealThumb} className="card-img-top" alt={item.strMeal}/>
          <div className="card-body">
            <h5 className="card-title layout display-6 meal-title" style={{height: '70px'}}>{item.strMeal}</h5>
            <Link to={`/meals/${item.idMeal}`} className='btn btn-secondary bottom-0'>Composition</Link>
          </div>
      </li>
  )
}

export default MealsItem