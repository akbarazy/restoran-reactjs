import Hero from '../Hero';
import Navbar from '../Navbar';

function Header() {
  return (
    <div className='container-xxl position-relative p-0'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
