import { useState, useEffect } from "react"
import { getAllCategories } from "../Utilst/FetchApiFrom";
import { useLocation, useHistory } from "react-router-dom";
import Loader from '../UI/Loader'
import ReazultList from "../UI/ReazultList";
import Search from "../UI/Search";

const Home = () => {
  const [catalogy, setCatalogy] = useState([]);
  const [filter, setFilter] = useState([]);
  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const hendelSearch = (str) => {
    setFilter(catalogy.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    push({
      pathname,
      search: `search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalogy(data.categories);
      setFilter(search ?
        data.categories.filter(item =>
          item.strCategory
            .toLowerCase()
            .includes(search.split("=")[1].toLowerCase())) : data.categories
      )
    });
  }, [search])
  console.log(filter);

  return (
    <>
      <Search cb={hendelSearch} />
      {!catalogy.length ? (<Loader />) : (<ReazultList catalogy={filter} />)}
    </>
  )
}

export default Home