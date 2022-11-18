import { useState, useEffect } from "react"
import { getAllCategories } from "../Utilst/FetchApiFrom";
import Loader  from '../UI/Loader'
import ReazultList from "../UI/ReazultList";

const Home = () => {
  const [catalogy, setCatalogy] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCatalogy(data.categories));
  }, [])
  
  return (
    <>
    {!catalogy.length ? (<Loader />) : (<ReazultList catalogy={catalogy} />)}
    </>
  )
}

export default Home