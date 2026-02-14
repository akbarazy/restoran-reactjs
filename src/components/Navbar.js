import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [resetDropdown, setResetDropdown] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [style, setStyle] = useState({ marginTop: 0, borderTop: 'none' });
  const collapseRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setStyle({ marginTop: 15, borderTop: '1px solid rgba(255,255,255,0.1)' });
    } else {
      const timer = setTimeout(() => {
        setStyle({ marginTop: 0, borderTop: 'none' });
      }, 325);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.innerWidth >= 992 && window.scrollY > 45);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Reset dropdown saat navbar ditutup
  useEffect(() => {
    if (!isOpen) setResetDropdown(prev => prev + 1);
  }, [isOpen]);

  // Update collapse height di mobile
  useEffect(() => {
    if (!collapseRef.current || window.innerWidth >= 992) return;
    if (isOpen) collapseRef.current.style.maxHeight = collapseRef.current.scrollHeight + 'px';
  }, [resetDropdown, isOpen]);

  const handleToggle = () => {
    if (window.innerWidth >= 992 || !collapseRef.current || isAnimating) return;

    setIsAnimating(true); // blok toggle sementara

    if (!isOpen) {
      collapseRef.current.style.maxHeight = collapseRef.current.scrollHeight + 'px';
      setIsOpen(true);
      setTimeout(() => {
        if (collapseRef.current) collapseRef.current.style.maxHeight = 'fit-content';
        setIsAnimating(false); // unblock toggle
      }, 350);
    } else {
      collapseRef.current.style.maxHeight = collapseRef.current.scrollHeight + 'px';
      requestAnimationFrame(() => {
        collapseRef.current.style.maxHeight = 0;
        setIsOpen(false);
        setTimeout(() => {
          setIsAnimating(false); // unblock toggle setelah collapse selesai
        }, 350);
      });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
      <Link to='/' className='navbar-brand p-0'>
        <h1 className='text-primary m-0'>
          <FontAwesomeIcon icon={faUtensils} className='me-2' />Restoran
        </h1>
      </Link>

      <button className='navbar-toggler' type='button' aria-expanded={isOpen} onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div 
        ref={collapseRef} 
        className={`navbar-collapse custom-collapse ${isOpen ? 'open' : ''}`}
        style={{ marginTop: style.marginTop, borderTop: style.borderTop }}
      >
        <div className='navbar-nav ms-auto py-0 pe-4'>
          <NavLink to='/' className='nav-item nav-link'>Home</NavLink>
          <NavLink to='/about' className='nav-item nav-link'>About</NavLink>
          <NavLink to='/service' className='nav-item nav-link'>Service</NavLink>
          <NavLink to='/menu' className='nav-item nav-link'>Menu</NavLink>

          <Dropdown title='Pages' resetKey={resetDropdown} parentOpen={isOpen}>
            <NavLink to='/team' className='dropdown-item'>Our Team</NavLink>
            <NavLink to='/testimonial' className='dropdown-item'>Testimonial</NavLink>
          </Dropdown>

          <NavLink to='/contact' className='nav-item nav-link'>Contact</NavLink>
        </div>

        <Link to='/booking' className='btn btn-primary py-2 px-4'>Book A Table</Link>
      </div>
    </nav>
  );
}

export default Navbar;
