import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Dropdown({ title, children, resetKey, parentOpen }) {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const location = useLocation();

  const pageRoutes = ['/team', '/testimonial'];
  const isActive = pageRoutes.includes(location.pathname);

  // Reset dropdown saat navbar ditutup atau resetKey berubah
  useEffect(() => {
    if (!parentOpen) setOpen(false);
  }, [resetKey, parentOpen]);

  // Update desktop state
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`nav-item dropdown ${open ? 'show' : ''}`}
      onMouseEnter={() => isDesktop && setOpen(true)}
      onMouseLeave={() => isDesktop && setOpen(false)}
    >
      <span
        className={`nav-link dropdown-toggle ${isActive ? 'active text-primary' : ''}`}
        role='button'
        onClick={() => !isDesktop && setOpen(prev => !prev)}
        aria-expanded={open}
      >
        {title}
      </span>

      <div className={`dropdown-menu custom-dropdown ${open ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
