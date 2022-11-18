import React from 'react'

const FoodItem = ({ item }) => {
  console.log(item);
  return (
    <div key={item.idMeal}>
      <h2 className='text-white'>{item.strCategory}</h2>
      {/* <img src="..." class="img-fluid" alt="..."></img> */}
      <img class="img-fluid img-food" src={item.strMealThumb} alt={item.strCategory} />
      <div className="text-white">
        <h1>{item.strMeal}</h1>
        <h2>Area: {item.strArea}</h2>
        <p className='fst-italic'><strong className='h4'>Instructions</strong>: {item.strInstructions}</p>
        <div className="">
          {item.strYoutube ? (<div><h5>Video Recipe</h5>
            <iframe src={`https://www.youtube.com/embed/${item.strYoutube.slice(-11)}`} title='id' /> </div>) : null}
        </div>
      </div>

      <p>
        <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Necessary products
        </button>
      </p>
      <div style={{ minHeight: "120px" }}>
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="card card-body" style={{ maxWidth: "500px" }}>
            <ul class="list-group">
              {item.strIngredient1 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient1} && <b>{item.strMeasure1}</b></li>) : null}
              {item.strIngredient2 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient2} && <b>{item.strMeasure2}</b></li>) : null}
              {item.strIngredient3 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient3} && <b>{item.strMeasure3}</b></li>) : null}
              {item.strIngredient4 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient4} && <b>{item.strMeasure4}</b></li>) : null}
              {item.strIngredient5 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient5} && <b>{item.strMeasure5}</b></li>) : null}
              {item.strIngredient6 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient6} && <b>{item.strMeasure6}</b></li>) : null}
              {item.strIngredient7 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient7} && <b>{item.strMeasure7}</b></li>) : null}
              {item.strIngredient8 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient8} && <b>{item.strMeasure8}</b></li>) : null}
              {item.strIngredient9 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient9} && <b>{item.strMeasure9}</b></li>) : null}
              {item.strIngredient10 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient10} && <b>{item.strMeasur10}</b></li>) : null}
              {item.strIngredient11 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient11} && <b>{item.strMeasure11}</b></li>) : null}
              {item.strIngredient12 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient12} && <b>{item.strMeasure12}</b></li>) : null}
              {item.strIngredient13 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient13} && <b>{item.strMeasure13}</b></li>) : null}
              {item.strIngredient14 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient14} && <b>{item.strMeasure14}</b></li>) : null}
              {item.strIngredient15 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient15} && <b>{item.strMeasure15}</b></li>) : null}
              {item.strIngredient16 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient16} && <b>{item.strMeasure16}</b></li>) : null}
              {item.strIngredient17 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient17} && <b>{item.strMeasure17}</b></li>) : null}
              {item.strIngredient18 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient18} && <b>{item.strMeasure18}</b></li>) : null}
              {item.strIngredient19 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient19} && <b>{item.strMeasure19}</b></li>) : null}
              {item.strIngredient20 ? (<li class="list-group-item d-flex align-items-center justify-content-between">{item.strIngredient20} && <b>{item.strMeasure20}</b></li>) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem