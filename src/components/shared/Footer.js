import { faAngleRight, faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";

function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div className={`container-fluid bg-dark text-light footer pt-5 mt-5 animated ${animated ? 'fadeIn' : 'opacity-0'}`} ref={ref}>
      <div className='container py-5'>
        <div className='row g-5'>

          <div className='col-lg-3 col-md-6'>
            <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>Company</h4>
            <Link className='btn btn-link' to='/about'>
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              About Us
            </Link>
            <Link className='btn btn-link' to='/contact'>
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Contact Us
            </Link>
            <Link className='btn btn-link' to='/reservation'>
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Reservation
            </Link>
            <Link className='btn btn-link' to='/privacy-policy'>
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Privacy Policy
            </Link>
            <Link className='btn btn-link' to='/terms-condition'>
              <FontAwesomeIcon icon={faAngleRight} className="me-2" />
              Terms & Condition
            </Link>
          </div>

          <div className='col-lg-3 col-md-6'>
            <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>Contact</h4>
            <p className="mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-3" />
              +012 345 67890
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />
              info@example.com
            </p>
            <div className='d-flex pt-2'>
              <Link className="btn btn-outline-light btn-social" to="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className="btn btn-outline-light btn-social" to="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link className="btn btn-outline-light btn-social" to="#">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link className="btn btn-outline-light btn-social" to="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>Opening</h4>
            <h5 className='text-light fw-normal'>Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className='text-light fw-normal'>Sunday</h5>
            <p>10AM - 08PM</p>
          </div>

          <div className='col-lg-3 col-md-6'>
            <h4 className='section-title ff-secondary text-start text-primary fw-normal mb-4'>Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className='position-relative mx-auto' style={{ maxWidth: '400px' }}>
              <input
                className='form-control border-primary w-100 py-3 ps-4 pe-5'
                type='text'
                placeholder='Your email'
              />
              <button
                type='button'
                className='btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2'
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='copyright'>
          <div className='row'>
            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
              &copy; <Link className='border-bottom' to='/'>Your Site Name</Link>, All Right Reserved.
              Designed By <Link className='border-bottom' to='/'>HTML Codex</Link><br /><br />
              Distributed By <Link className='border-bottom' to='#' target='_blank' rel='noreferrer'>ThemeWagon</Link>
            </div>
            <div className='col-md-6 text-center text-md-end'>
              <div className='footer-menu'>
                <Link to='/'>Home</Link>{' '}
                <Link to='/cookies'>Cookies</Link>{' '}
                <Link to='/help'>Help</Link>{' '}
                <Link to='/faq'>FQAs</Link>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
