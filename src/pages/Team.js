import { Link } from 'react-router-dom';
import teamImg1 from '../assets/images/team-1.jpg';
import teamImg2 from '../assets/images/team-2.jpg';
import teamImg3 from '../assets/images/team-3.jpg';
import teamImg4 from '../assets/images/team-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  { name: 'Full Name', designation: 'Designation', img: teamImg1 },
  { name: 'Full Name', designation: 'Designation', img: teamImg2 },
  { name: 'Full Name', designation: 'Designation', img: teamImg3 },
  { name: 'Full Name', designation: 'Designation', img: teamImg4 },
];

function Team() {
  return (
    <div className='container-xxl pt-5 pb-3'>
      <div className='container'>
        <div className='text-center animated fadeInUp'>
          <h5 className='section-title ff-secondary text-center text-primary fw-normal'>Team Members</h5>
          <h1 className='mb-5'>Our Master Chefs</h1>
        </div>
        <div className='row g-4'>
          {teamMembers.map((member, index) => (
            <Card key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ member, index }) {
  return (
    <div className='col-lg-3 col-md-6 animated fadeInUp' style={{ animationDelay: `${index * 0.2}s` }}>
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
