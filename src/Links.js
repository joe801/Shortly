const Links = () => {
    return ( 
        <div className=' text-center bg-darkViolet text-white absolute w-10/12 mx-auto top-24 font-bold rounded-xl md:hidden'>
            <div className=' border-b border-gray w-4/5 mx-auto py-4'>
                <p className='py-4'>Features</p>
                <p className='py-2'>Pricing</p>
                <p className='py-4'>Resources</p>
            </div>
            <div className='pb-8'>
                <p className='pt-8 pb-4'>Login</p>
                <button className='py-2 bg-cYan w-4/5 rounded-3xl'>Sign Up</button>
            </div>
        </div>
    );
}
 
export default Links;
