import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { team } from '../assets/constant/team';
import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

function Team({ section = false }) {
  const items = section ? team.slice(0, 4) : team;
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div className='container-xxl pt-5 pb-3' ref={ref}>
      <div className='container'>
        <div className={`text-center animated ${animated ? 'fadeInUp' : 'opacity-0'}`}>
          <h5 className='section-title ff-secondary text-center text-primary fw-normal'>Team Members</h5>
          <h1 className='mb-5'>Our Master Chefs</h1>
        </div>
        <div className='row g-4'>
          {items.map((member, index) => (
            <Card key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ member, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div ref={ref} className={`col-lg-3 col-md-6 animated ${animated ? 'fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${index > 3 ? (index - 4) * 0.2 : index * 0.2}s` }}>
      <div className='team-item text-center rounded overflow-hidden'>
        <div className='rounded-circle overflow-hidden m-4'>
          <img className='img-fluid' src={member.img} alt={member.name} />
        </div>
        <h5 className='mb-0'>{member.name}</h5>
        <small>{member.designation}</small>
        <div className='d-flex justify-content-center mt-3'>
          <Link className='btn btn-square btn-primary mx-1' to='#'><FontAwesomeIcon icon={faFacebookF} /></Link>
          <Link className='btn btn-square btn-primary mx-1' to='#'><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link className='btn btn-square btn-primary mx-1' to='#'><FontAwesomeIcon icon={faInstagram} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Team;
