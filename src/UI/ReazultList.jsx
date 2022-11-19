import React from 'react';
import ReazultItem from './ReazultItem';
import Setion1 from './Setion1';
import Corusel from './Corusel';

const ReazultList = ({ catalogy = [] }) => {
  return (
    <div className="text-start">
      <Setion1 />
      <Corusel />

      <h1 className='my-2 text-white lead display-3 font-monospace'>Category</h1>
      <ul className='list d-flex justify-content-center flex-wrap m-0 p-0'>
        {catalogy.map((item) => (<ReazultItem item={item} />))}
      </ul>
    </div>
  )
}

export default ReazultList