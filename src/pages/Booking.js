import { useState } from 'react';
import Modal from '../components/Modal';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    people: '1',
    message: '',
  });
  const [videoModal, setVideoModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  function openModal(src) {
    setVideoSrc(src);
    setVideoModal(true);
  }

  return (
    <>
      <div className='container-xxl py-5 px-0 animated fadeInUp'>
        <div className='row g-0'>
          <div className='col-md-6'>
            <div className='video'>
              <button
                type='button'
                className='btn-play'
                onClick={() =>
                  openModal('https://www.youtube.com/embed/GBIIQ0kP15E?si=bzjLi4MX5CG9NOmj')
                }
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className='col-md-6 bg-dark d-flex align-items-center'>
            <div className='p-5 animated fadeInUp'>
              <h5 className='section-title ff-secondary text-start text-primary fw-normal'>
                Reservation
              </h5>
              <h1 className='text-white mb-4'>Book A Table Online</h1>
              <form onSubmit={handleSubmit}>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor='name'>Your Name</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor='email'>Your Email</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-floating date' id='date3'>
                      <input
                        type='text'
                        className='form-control datetimepicker-input'
                        id='datetime'
                        placeholder='Date & Time'
                        value={formData.datetime}
                        onChange={handleChange}
                      />
                      <label htmlFor='datetime'>Date & Time</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <select
                        className='form-select'
                        id='people'
                        value={formData.people}
                        onChange={handleChange}
                      >
                        <option value='1'>People 1</option>
                        <option value='2'>People 2</option>
                        <option value='3'>People 3</option>
                      </select>
                      <label htmlFor='people'>No Of People</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-floating'>
                      <textarea
                        className='form-control'
                        placeholder='Special Request'
                        id='message'
                        style={{ height: '100px' }}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <label htmlFor='message'>Special Request</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-primary w-100 py-3' type='submit'>
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal
        videoSrc={videoSrc}
        show={videoModal}
        onClose={() => setVideoModal(false)}
      />
    </>
  );
}

export default Booking;
