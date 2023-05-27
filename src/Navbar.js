import logo from './images/logo.svg';
import menu from './images/icons8-menu.svg';
import { useState } from 'react';
import Links from './Links';

const Navbar = () => {
    const [showLink, setShowLink] = useState(false);
    return (
        <nav className='w-10/12 mx-auto py-10 flex justify-between'>
            <img 
            className='h-8 xl:mr-8'
            src={logo} 
            alt="logo"/>
            {showLink && <Links />}
            <div className='hidden items-center w-4/5 justify-between text-xs text-grayishViolet font-bold md:flex xl:w-11/12'>
                <div className='flex'>
                    <p className='mx-4 cursor-pointer hover:text-veryDarkBlue duration-300'>Features</p>
                    <p className='mx-4 cursor-pointer hover:text-veryDarkBlue duration-300'>Pricing</p>
                    <p className='mx-4 cursor-pointer hover:text-veryDarkBlue duration-300'>Resources</p>
                </div>
                <div className='flex items-center'>
                    <p className='mr-4'>Login</p>
                    <button className=' bg-cYan w-20 py-2 text-white rounded-3xl ml-3 hover:opacity-60 duration-300'>Sign Up</button>
                </div>
            </div>
            <img 
            className='h-8 md:hidden'
            src={menu} 
            onClick={() => setShowLink(!showLink)}
            alt="navbar"/>
        </nav>
    );
}
 
export default Navbar;