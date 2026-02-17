import heroImg from '../assets/images/hero.png';
import { Link, useLocation } from 'react-router-dom';

function Hero() {
  const pageTitles = {
    '/service': 'Services',
    '/contact': 'Contact Us',
    '/about': 'About Us',
    '/menu': 'Food Menu',
    '/team': 'Our Team',
  };
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === '/' || path === '/home';
  const pageTitle = pageTitles[path] || path.slice(1).replace('-', ' ');

  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      {isHome ? (
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our <br /> Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                to="/booking"
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Book A Table
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={heroImg} alt="Delicious Meal" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 text-capitalize animated slideInDown">
            {pageTitle}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to='#'>Pages</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                {path.slice(1).replace('-', ' ').toUpperCase()}
              </li>
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Hero;
