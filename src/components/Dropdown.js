import { useState, useEffect } from "react";

function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (isDesktop) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setOpen(false);
  };

  const handleClick = () => {
    if (!isDesktop) setOpen(!open);
  };

  return (
    <div
      className={`nav-item dropdown ${open ? "show" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="nav-link dropdown-toggle"
        role="button"
        onClick={handleClick}
        aria-expanded={open}
      >
        {title}
      </span>

      <div className={`dropdown-menu m-0 ${open ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
