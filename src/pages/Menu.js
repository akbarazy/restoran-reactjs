import menuImg1 from '../assets/images/menu-1.jpg';
import menuImg2 from '../assets/images/menu-2.jpg';
import menuImg3 from '../assets/images/menu-3.jpg';
import menuImg4 from '../assets/images/menu-4.jpg';
import menuImg5 from '../assets/images/menu-5.jpg';
import menuImg6 from '../assets/images/menu-6.jpg';
import menuImg7 from '../assets/images/menu-7.jpg';
import menuImg8 from '../assets/images/menu-8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const menuData = [
  { category: 'Breakfast', icon: faCoffee, label: 'Popular', margin: 'me-3' },
  { category: 'Lunch', icon: faHamburger, label: 'Special', margin: 'mx-3' },
  { category: 'Dinner', icon: faUtensils, label: 'Lovely', margin: 'ms-3' },
];

const items = [
  { name: 'Chicken Burger', price: 115, img: menuImg1, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg2, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg3, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg4, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg5, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg6, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg7, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
  { name: 'Chicken Burger', price: 115, img: menuImg8, desc: 'Ipsum ipsum clita erat amet dolor justo diam' },
];

function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState('');

  function handleTabMenu(index) {
    if (index === activeTab) return;

    setFade('fadeOut');
    setActiveTab(index);

    setTimeout(() => {
      setFade('fadeIn');
    }, 175);
  }

  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div className='text-center animated fadeInUp'>
          <h5 className='section-title ff-secondary text-center text-primary fw-normal'>Food Menu</h5>
          <h1 className='mb-5'>Most Popular Items</h1>
        </div>

        <div className='tab-class text-center animated fadeInUp'>
          <ul className='nav nav-pills d-inline-flex justify-content-center border-bottom mb-5'>
            {menuData.map((menu, index) => (
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
            {menuData.map((menu, index) => (
              <div
                key={menu.category}
                className={`tab-pane p-0 animated ${activeTab === index ? 'active' : ''} ${fade}`}
              >
                <div className='row g-4'>
                  {items.map((item, i) => (
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
