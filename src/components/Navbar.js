import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top'>
      <div className='container px-3'>
        <a href='#' className='navbar-brand p-0 d-flex align-items-center'>
          <h1 className='text-primary m-0' style={{ lineHeight: '1' }}>
            <FontAwesomeIcon icon={faUtensils} className='me-2' size='md' />
            Restoran
          </h1>
        </a>
        <button
          className='navbar-toggler custom-toggler border border-primary shadow-none py-2 px-2'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <FontAwesomeIcon icon={faBars} className='text-primary' />
        </button>
        <div className='collapse navbar-collapse custom-collapse' id='navbarCollapse'>
          <div className='navbar-nav ms-auto pb-0 pt-3 pt-lg-0 pe-lg-4'>
            <NavLink to='/' className='nav-item nav-link py-1'>Home</NavLink>
            <NavLink to='/about' className='nav-item nav-link py-1'>About</NavLink>
            <NavLink to='/service' className='nav-item nav-link py-1'>Service</NavLink>
            <NavLink to='/menu' className='nav-item nav-link py-1'>Menu</NavLink>
            <div className='nav-item dropdown'>
              <a href='#' className='nav-link py-1 dropdown-toggle' data-bs-toggle='dropdown'>Pages</a>
              <div className='dropdown-menu dropdown-menu-end m-0'>
                <NavLink to='/booking' className='dropdown-item'>Booking</NavLink>
                <NavLink to='/team' className='dropdown-item'>Our Team</NavLink>
                <NavLink to='/testimonial' className='dropdown-item'>Testimonial</NavLink>
              </div>
            </div>
            <NavLink to='/contact' className='nav-item nav-link py-1'>Contact</NavLink>
          </div>
          <div className="d-flex justify-content-center w-lg-100 mt-2 mt-lg-0">
            <a href='#' className='btn btn-primary py-2 px-4'>Book A Table</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;