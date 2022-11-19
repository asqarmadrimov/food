import React from 'react'
import { Link } from 'react-router-dom'

const ReazultItem = ({ item }) => {

  return (
      <li key={item.idCategory} className="card mx-auto my-2 bg-ligh" style={{width: '30rem'}}>
        <img src={item.strCategoryThumb} className="card-img-top" alt={item.strCategory}/>
          <div className="card-body">
            <h5 className="card-title layout display-6">{item.strCategory}</h5>
            <p className='card-text font-monospace' style={{ overflow: "auto", height: '120px' }}>{item.strCategoryDescription}</p>
          </div>
            <Link to={`/category/${item.strCategory}`} className='btn btn-secondary bottom-0'>Info</Link>
      </li>
  )
}

export default ReazultItem