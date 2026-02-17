import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { contact } from '../assets/constant/contact';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className='container-xxl py-5' ref={ref}>
      <div className='container'>
        <div className={`text-center animated ${animated ? 'fadeInUp' : 'opacity-0'}`}>
          <h5 className='section-title text-primary fw-normal ff-secondary'>
            Contact Us
          </h5>
          <h1 className='mb-5'>Contact For Any Query</h1>
        </div>

        <div className='row g-4'>
          <div className='col-12'>
            <div className='row gy-4'>
              {contact.map((item, index) => (
                <div className='col-md-4' key={index}>
                  <h5 className='section-title text-start text-primary fw-normal ff-secondary'>
                    {item.title}
                  </h5>
                  <p>
                    <FontAwesomeIcon icon={faEnvelopeOpen} className='text-primary me-2' />
                    {item.email}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`col-md-6 animated ${animated ? 'fadeIn' : 'opacity-0'}`}>
            <iframe
              className='position-relative rounded w-100 h-100'
              src='https://www.google.com/maps/embed?pb=!1m18...'
              style={{ minHeight: '350px', border: 0 }}
              allowFullScreen
              title='Google Map'
            ></iframe>
          </div>

          <div className={`col-md-6 animated ${animated ? 'fadeInUp' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit}>
              <div className='row g-3'>
                <div className='col-md-6'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Your Name'
                      value={form.name}
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
                      value={form.email}
                      onChange={handleChange}
                    />
                    <label htmlFor='email'>Your Email</label>
                  </div>
                </div>

                <div className='col-12'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      placeholder='Subject'
                      value={form.subject}
                      onChange={handleChange}
                    />
                    <label htmlFor='subject'>Subject</label>
                  </div>
                </div>

                <div className='col-12'>
                  <div className='form-floating'>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Leave a message here'
                      style={{ height: '150px' }}
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor='message'>Message</label>
                  </div>
                </div>

                <div className='col-12'>
                  <button
                    className='btn btn-primary w-100 py-3'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
