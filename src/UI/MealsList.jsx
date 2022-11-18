import React from 'react'
import MealsItem from './MealsItem'
import img from '../Utilst/images/arrow-left-circle.svg'
import { useHistory } from 'react-router-dom'

const MealsList = ({ meals, name }) => {
  const {goBack} = useHistory();

  return (
    <div className="text-start">
      <button className='btn btn-light my-3' onClick={goBack}><img src={img} alt="icon" width={20} height={20}/></button>
      <h1 className='my-2 text-white lead display-3 font-monospace'>{name}</h1>
      <ul className='list d-flex justify-content-between flex-wrap m-0 p-0'>
        {meals.map((item) => (<MealsItem item={item}/>))}
      </ul>
    </div>
  )
}

export default MealsList