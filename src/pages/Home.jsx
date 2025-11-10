import { Link } from 'react-router-dom';
import Icon from '../assets/SVG.svg';

const Home = () => {
   return (
      <div className='home-container'>
         <div className='home-content'>
            <h1 className='home-title'>
               Your wellness journey
               <br />
               starts here.
            </h1>
            <p className='home-quiz'>
               Take a quick quiz to discover which Liquid Blenz herbal blends
               may support your energy, digestion, and overall wellness.
            </p>
            <Link to='/quiz' className='home-link'>
               Every herbal wellness options personalized to you.
            </Link>

            <Link to='/quiz' className='home-btn-link'>
               <div className='home-btn'>
                  <button>Get Started</button>
                  <img src={Icon} alt='icon' />
               </div>
            </Link>
            <p className='home-policy'>
               By clicking 'Continue', you agree that Liquid Blenz may use your
               responses to personalize your experience and recommend herbal
               products that may support your wellness goals. Your answers are
               not used for medical diagnosis or treatment. Learn more in our{' '}
               <a href='#' className='home-policy-link'>
                  Privacy Policy
               </a>
            </p>
         </div>
      </div>
   );
};

export default Home;
