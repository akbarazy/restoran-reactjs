import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { menuCategory, menuItems } from '../assets/constant/menu';

function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState('');
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  function handleTabMenu(index) {
    if (index === activeTab) return;

    setFade('fadeOut');
    setActiveTab(index);

    setTimeout(() => {
      setFade('fadeIn');
    }, 175);
  }

  return (
    <div className='container-xxl py-5' ref={ref}>
      <div className='container'>
        <div className={`text-center animated ${animated ? 'fadeInUp' : 'opacity-0'}`}>
          <h5 className='section-title ff-secondary text-center text-primary fw-normal'>Food Menu</h5>
          <h1 className='mb-5'>Most Popular Items</h1>
        </div>

        <div className={`tab-class text-center animated ${animated ? 'fadeInUp' : 'opacity-0'}`}>
          <ul className='nav nav-pills d-inline-flex justify-content-center border-bottom mb-5'>
            {menuCategory.map((menu, index) => (
              <li className='nav-item' key={menu.category}>
                <button
                  className={`btn btn-link text-capitalize p-0 d-flex align-items-center text-start pb-3 menu-tab-button ${menu.margin} ${activeTab === index ? 'active' : ''}`}
                  onClick={() => handleTabMenu(index)}
                >
                  <FontAwesomeIcon icon={menu.icon} size='2x' className='text-primary' />
                  <div className='ps-3'>
                    <small className='text-body'>{menu.label}</small>
                    <h6 className='mt-n1 mb-0'>{menu.category}</h6>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          <div className='tab-content'>
            {menuCategory.map((menu, index) => (
              <div
                key={menu.category}
                className={`tab-pane p-0 animated ${activeTab === index ? 'active' : ''} ${fade}`}
              >
                <div className='row g-4'>
                  {menuItems.map((item, i) => (
                    <div className='col-lg-6' key={i}>
                      <div className='d-flex align-items-center'>
                        <img className='flex-shrink-0 img-fluid rounded' src={item.img} alt={item.name} style={{ width: '80px' }} />
                        <div className='w-100 d-flex flex-column text-start ps-4'>
                          <h5 className='d-flex justify-content-between border-bottom pb-2'>
                            <span>{item.name}</span>
                            <span className='text-primary'>${item.price}</span>
                          </h5>
                          <small className='fst-italic'>{item.desc}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Menu;
