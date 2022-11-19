import React from 'react'

const BookmekrItem = ({ item }) => {
  return (
    <>
      {item ? (
        <li class="card" style={{width: '10rem'}}>
        <img src={item.strMealThumb} class="card-img-top" alt="img"/>
          <div class="card-body">
            <h5 class="card-title">{item.strMeal}</h5>
          </div>
      </li>
      ) : []
      }
    </>
  )
}

export default BookmekrItem