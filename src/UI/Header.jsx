import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className="container-flud">
        <div className="p-2 bg-dark d-flex align-items-center justify-content-between">
          <Link to='/' className='mb-0 text-white lead text-de'>Free Mael</Link>

          <div>
            <Link to='/aboute' className='me-3 text-white'>Aboute</Link>
            <Link to='/contact' className='me-3 text-white'>Contact</Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header