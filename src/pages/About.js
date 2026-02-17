import TeamSection from './Team';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { about } from '../assets/constant/about'

function About({ section = false }) {
  if (!section) {
    return (
      <>
        <Section />
        <TeamSection />
      </>
    );
  } else {
    return (
      <Section />
    );
  }
}

function Section() {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div className='row g-5 align-items-center'>

          <div className='col-lg-6'>
            <div className='row g-3'>
              {about.map((img, index) => (
                <div
                  key={index}
                  className={`col-6 ${index < 2 ? 'text-start' : 'text-end'}`}
                >
                  <img
                    src={img.src}
                    alt={`about-${index}`}
                    className={`img-fluid rounded animated zoomIn ${img.className}`}
                    style={{ animationDelay: `${index * 0.2}s`, marginTop: index === 1 ? '25%' : '0' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='col-lg-6'>
            <h5 className='section-title ff-secondary text-start text-primary fw-normal'>
              About Us
            </h5>

            <h1 className='mb-4'>
              Welcome to
              <FontAwesomeIcon icon={faUtensils} className='text-primary mx-1' />
              Restoran
            </h1>

            <p className='mb-4'>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
            </p>
            <p className='mb-4'>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className='row g-4 mb-4'>
              <Counter number={15} label1='Years of' label2='Experience' />
              <Counter number={50} label1='Popular' label2='Master Chefs' />
            </div>

            <Link to='/menu' className='btn btn-primary py-3 px-5 mt-2'>
              Read More
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

function Counter({ number, label1, label2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 3000;
    const end = Number(number);

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);

      setCount(Math.floor(progressPercent * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [number]);

  return (
    <div className='col-sm-6'>
      <div className='d-flex align-items-center border-start border-5 border-primary px-3'>
        <h1 className='flex-shrink-0 display-5 text-primary mb-0'>
          {count}
        </h1>
        <div className='ps-4'>
          <p className='mb-0'>{label1}</p>
          <h6 className='text-uppercase mb-0'>{label2}</h6>
        </div>
      </div>
    </div>
  );
}

export default About;