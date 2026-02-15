import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!show && buttonRef.current) {
      buttonRef.current.blur();
    }
  }, [show]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className={`btn btn-primary btn-lg btn-lg-square back-to-top 
        animated ${show ? "fadeIn" : "fadeOut"}`}
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default BackToTop;
