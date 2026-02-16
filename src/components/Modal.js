import { useState, useEffect } from 'react';

function Modal({ videoSrc, show, onClose }) {
  const [src, setSrc] = useState('');
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      const autoplaySrc = videoSrc.includes('?')
        ? `${videoSrc}&autoplay=1`
        : `${videoSrc}?autoplay=1`;
      setSrc(autoplaySrc);
      // document.body.style.overflow = 'hidden';
    } else {
      setSrc('');
      // document.body.style.overflow = 'auto';
    }
  }, [show, videoSrc]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`modal-backdrop animated ${show ? 'fadeIn' : 'fadeOut'}`}
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      ></div>

      <div
        className={`modal animated ${show ? 'fadeInDown' : 'fadeOutUp'}`}
        style={{ display: 'block' }}
        tabIndex='-1'
        aria-labelledby='videoModalLabel'
        aria-modal='true'
        role='dialog'
        id='videoModal'
      >
        <div className='modal-dialog'>
          <div className='modal-content rounded-0'>
            <div className='modal-header'>
              <h5 className='modal-title' id='videoModalLabel'>
                Youtube Video
              </h5>
              <button
                type='button'
                className='btn-close'
                onClick={onClose}
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='ratio ratio-16x9'>
                <iframe
                  className='embed-responsive-item'
                  src={src}
                  allowFullScreen
                  allow='autoplay; encrypted-media'
                  title='Video'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
