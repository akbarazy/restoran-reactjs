import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { service } from '../assets/constant/service';

function Service({ section = false }) {
  const items = section ? service.slice(0, 4) : service;

  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        {!section && (
          <div class="text-center animated fadeInUp">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
            <h1 class="mb-5">Explore Our Services</h1>
          </div>
        )}
        <div className='row g-4'>
          {items.map((item, index) => (
            <div key={index} className='col-lg-3 col-sm-6 animated fadeInUp' style={{ animationDelay: `${index > 3 ? (index - 4) * 0.2 : index * 0.2}s` }}>
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
