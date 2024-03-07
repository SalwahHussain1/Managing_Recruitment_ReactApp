
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
          Recruitment <span>Management</span> App
          </h1>
          <p>
          Recruitment Application systems, whether manual or 
          automated, streamline this process by providing a centralized
           platform to store application details, track progress, and set reminders 
           for important deadlines or interviews. 
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
       
      </div>
    </Wrapper>
  );
};

export default Landing;
