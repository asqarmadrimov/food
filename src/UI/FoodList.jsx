import React from 'react'
import { useHistory } from 'react-router-dom';
import FoodItem from './FoodItem';
import img from '../Utilst/images/arrow-left-circle.svg'

const FoodList = ({ food }) => {
  const {goBack} = useHistory()
  
  return (
    <div className="text-start ">
      <button className='btn btn-light my-3' onClick={goBack}><img src={img} alt="icon" width={20} height={20}/></button>
      <div className='text-start'>
      {food.map(item => <FoodItem item={item}/>)}
    </div>
    </div>
  )
}

export default FoodList