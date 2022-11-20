import { useState } from 'react'

const Search = ({cb = Function.prototype}) => {
  const [value, setValue] = useState([])

  const hendelKey = (e) => {
    if(e.key === 'Enter') {

    }
  }

  const hendelSubmit = () => {
    cb(value)
    setValue('')
  }

  return (
    <>
    <p className='h5 text-start mb-0 mt-3 text-white fw-semibold fs-4'>Enter the names of the roofs</p>
    <div className='d-flex align-items-center my-3 w-75 text-center'>
      <p className='d-block's></p>
      <input type="search"
             className='form-control'
             id='search-field'
             placeholder='Search...'
             onKeyDown={hendelKey}
             onChange={(e) => setValue(e.target.value)}
             value={value}/>
      <button onClick={hendelSubmit} className='btn btn-dark'>Search</button>
    </div>
    </>
  )
}

export default Search