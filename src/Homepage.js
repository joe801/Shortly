import illustration from './images/illustration-working.svg';

const Homepage = () => {
    return ( 
        <main className='w-10/12 mx-auto pb-10 grid md:grid-cols-2'>
            <img 
            className=' pl-8 md:order-2'
            src={illustration} 
            alt='illustration' />
            <div className=' text-center md:order-1 md:text-left lg:w-4/5 lg:pt-12'>
                <h1 className=' text-4xl my-6 font-bold lg:text-5xl text-veryDarkViolet'>More than just shorter links</h1>
                <p className=' text-grayishViolet mb-6'>Build your brand's recognition and get detailed 
                    insights on how your links are performing
                </p>
                <button className='bg-cYan w-40 py-3 text-white rounded-3xl hover:opacity-60 duration-300'>
                    Get Started
                </button>
            </div>
        </main>
    );
}
 
export default Homepage;