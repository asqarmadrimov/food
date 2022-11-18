import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodList from '../UI/FoodList';
import Loader from '../UI/Loader';
import { getMealId } from '../Utilst/FetchApiFrom';

const Composition = () => {
  const {id} = useParams();
  const [food, setFood] = useState([]);
  
  useEffect(() => {
    getMealId(id).then(item => setFood(item.meals))
  }, [id]);

  return (
    <>
    {!food ? (<Loader />) : (<FoodList food={food}/>)}
    </>
  )
}

export default Composition