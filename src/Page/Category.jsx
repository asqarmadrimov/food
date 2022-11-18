import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getMealFilter } from '../Utilst/FetchApiFrom';
import Loader from '../UI/Loader';
import MealsList from '../UI/MealsList';

const Category = () => {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMealFilter(name).then(item => setMeals(item.meals))

  }, [name])

  return (
    <div className='category-list'>
      {!meals ? (<Loader />) : (<MealsList meals={meals} name={name} />)}
    </div>
  )
}

export default Category