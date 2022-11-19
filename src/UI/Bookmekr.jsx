import React from 'react'
import img from '../Utilst/images/bag-check.svg'
import BookmekrItem from './BookmekrItem';

const Bookmekr = () => {
  let windo = JSON.parse(localStorage.getItem('food'));
  let arr = [];
  arr.push(windo)
  return (
    <>
      <div className="\">
        <button class="border-0 m-0 p-1 btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          <img src={img} alt="" width={25} height={25} />
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="staticBackdropLabel">Saved</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
            {arr.map(item => <BookmekrItem item={item}/> )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookmekr