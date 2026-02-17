import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { service } from '../assets/constant/service';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

function Service({ section = false }) {
  const items = section ? service.slice(0, 4) : service;
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div className='container-xxl py-5' ref={ref}>
      <div className='container'>
        {!section && (
          <div className={`text-center animated ${animated ? 'fadeInUp' : 'opacity-0'}`}>
            <h5 className='section-title ff-secondary text-center text-primary fw-normal'>Our Services</h5>
            <h1 className='mb-5'>Explore Our Services</h1>
          </div>
        )}
        <div className='row g-4'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-sm-6 animated ${animated ? 'fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index > 3 ? (index - 4) * 0.2 : index * 0.2}s` }}
            >
              <div className='service-item rounded pt-3 h-100'>
                <div className='p-4'>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size='3x'
                    className='text-primary mb-4'
                  />
                  <h5>{item.title}</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                    clita amet diam
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
