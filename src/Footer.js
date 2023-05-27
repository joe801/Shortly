import logo from './images/logo-white.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';

const Footer = () => {
    return ( 
        <footer className=' bg-veryDarkViolet text-gray pb-12'>
            <div className=' text-center grid justify-center lg:grid-cols-6'>
                <img className='pt-20 pb-10 w-40 mx-auto lg:col-span-2 lg:pt-10 lg:w-24' src={logo} alt="logo" />
                <ul className=' leading-8'>
                    <li className=' font-bold text-xl text-white my-6 lg:text-base lg:mt-10'>Features</li>
                    <li className='cursor-pointer hover:text-cYan'>Link Shortening</li>
                    <li className='cursor-pointer hover:text-cYan'>Branded Links</li>
                    <li className='cursor-pointer hover:text-cYan'>Analytics</li>
                </ul>
                <ul className=' leading-8'>
                    <li className=' font-bold text-xl text-white my-6 lg:text-base lg:mt-10'>Resources</li>
                    <li className='cursor-pointer hover:text-cYan'>Blog</li>
                    <li className='cursor-pointer hover:text-cYan'>Developers</li>
                    <li className='cursor-pointer hover:text-cYan'>Support</li>
                </ul>
                <ul className=' leading-8'>
                    <li className=' font-bold text-xl text-white my-6 lg:text-base lg:mt-10'>Company</li>
                    <li className='cursor-pointer hover:text-cYan'>About</li>
                    <li className='cursor-pointer hover:text-cYan'>Our Team</li>
                    <li className='cursor-pointer hover:text-cYan'>Careers</li>
                    <li className='cursor-pointer hover:text-cYan duration-300'>Contact</li>
                </ul>
                <div className=' flex py-8 gap-6 lg:h-20 lg:mt-3'>
                    <img className='cursor-pointer' src={facebook} alt="facebook" />
                    <img className='cursor-pointer' src={twitter} alt="twitter" />
                    <img className='cursor-pointer' src={pinterest} alt="pinterest" />
                    <img className='cursor-pointer' src={instagram} alt="instagram" />
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;