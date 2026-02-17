import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonial } from '../assets/constant/testimonial';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

function Testimonial() {
  const isLoop = testimonial.length > 3;
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div className={`container-xxl py-5 animated ${animated ? 'fadeInUp' : 'opacity-0'}`} ref={ref}>
      <div className='container'>
        <div className='text-center'>
          <h5 className='section-title ff-secondary text-primary fw-normal'>
            Testimonial
          </h5>
          <h1 className='mb-5'>Our Clients Say!!!</h1>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          grabCursor={true}
          speed={1000}
          centeredSlides={isLoop}
          loop={isLoop}
          spaceBetween={24}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonial.map((item) => (
            <SwiperSlide key={item.id} className='h-auto d-flex'>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='testimonial-pagination mt-4 d-flex justify-content-center'></div>
      </div>
    </div>
  );
}

function Card({ name, profession, image, message }) {
  return (
    <div className='testimonial-item bg-transparent border rounded p-4 w-100'>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        size='3x'
        className='text-primary mb-3'
      />

      <p className='mb-3'>{message}</p>

      <div className='d-flex align-items-center'>
        <img
          src={image}
          alt={name}
          width='50'
          height='50'
          loading='lazy'
          className='rounded-circle flex-shrink-0'
        />
        <div className='ps-3'>
          <h5 className='mb-1'>{name}</h5>
          <small>{profession}</small>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
