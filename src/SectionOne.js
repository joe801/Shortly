import FormLink from "./FormLink";
import icon_brand from './images/icon-brand-recognition.svg';
import icon_detailed from './images/icon-detailed-records.svg';
import icon_fully from './images/icon-fully-customizable.svg';

const SectionOne = () => {
    return ( 
        <section className=" bg-gray mt-28 relative pb-20">
            <FormLink />
            <div className=" w-10/12 mx-auto text-center grid justify-items-center">
                <h2 className=" text-2xl font-bold pt-14 text-veryDarkViolet">
                    Advanced Statistics
                </h2>
                <p className=" my-4 text-veryDarkBlue/50 md:w-5/12">
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
                <div className=" grid grid-cols-1 justify-items-center lg:flex">
                    <div className="h-72 grid justify-items-center grid-cols-1 w-full mx-auto bg-white z-10 relative mt-20 pt-16 pb-10 px-4 lg:mr-4 lg:justify-items-start lg:text-start lg:pl-8">
                        <img
                        className=" bg-darkViolet p-6 rounded-full absolute -top-10 lg:left-8" 
                        src={icon_brand} alt="icon-brand" />
                        <h3 className=" text-xl font-bold py-4 text-veryDarkViolet">Brand Recognition</h3>
                        <p className=" text-grayishViolet">
                            Boost your brand recognition with each click. Generic links don't mean a thing.
                            Branded links help instill confidence in your content.
                        </p>       
                    </div>
                    <div className=" px-1 w-2 h-24 bg-cYan lg:rotate-90 lg:mt-40"></div>
                    <div className="h-72 grid justify-items-center grid-cols-1 w-full mx-auto bg-white z-10 relative pt-16 pb-10 px-4 lg:mt-28 lg:mr-4 lg:justify-items-start lg:text-start lg:pl-8">
                        <img 
                        className=" bg-darkViolet p-6 rounded-full absolute -top-10 lg:left-8"
                        src={icon_detailed} alt="icon-detailed" />
                        <h3 className=" text-xl font-bold py-4 text-veryDarkViolet">Detailed Records</h3>
                        <p className=" text-grayishViolet">
                            Gain insights into who is clicking your links. Knowing when and where people engage
                            with your content helps inform better decisions.
                        </p>       
                    </div>
                    <div className=" px-1 w-2 h-24 bg-cYan lg:rotate-90 lg:mt-40"></div>
                    <div className="h-72 grid justify-items-center grid-cols-1 w-full mx-auto bg-white relative pt-16 pb-10 px-4 lg:mt-36 lg:mr-4 lg:justify-items-start lg:text-start lg:pl-8">
                        <img
                        className=" bg-darkViolet p-6 rounded-full absolute -top-10 lg:left-8"
                        src={icon_fully} alt="icon-fully" />
                        <h3 className=" text-xl font-bold py-4 text-veryDarkViolet">Fully Customizable</h3>
                        <p className=" text-grayishViolet">
                            Improve brand awareness and content discoverability through customizable links,
                            supercharging audience engagement.
                        </p>       
                    </div>
                </div>
                
            </div>
        </section>
    );
}
 
export default SectionOne;