import { useState } from "react";

const ShortLink = ( { list, copy} ) => {
    const [copiedStatus, setCopiedStatus] = useState({});
    // function calls the copy to cliboard function passed as prop
    //and also handle copied button
    const handleCopy = (link) => {
        copy(link);
        setCopiedStatus((prevStatus) => ({
          ...prevStatus,
          [link]: true,
        }));
      };
    return ( 
        <>
            {list.map((link) => (
                <div 
                className=" bg-white w-10/12 mx-auto my-8 grid lg:grid-cols-5 lg:my-4"
                key={link.key}>
                    <p className="truncate border-b border-gray p-4 lg:col-span-3">{link.full}</p>
                        <div className=" lg:flex grid lg:w-full lg:col-span-2 lg:items-center lg:justify-end">
                        <p className="p-4 text-cYan">
                            <a href={link.short} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                {link.shortURL}
                            </a>
                        </p>
                        {copiedStatus[link.short] ? (
                            <button 
                            className=" bg-darkViolet text-center py-2 w-11/12 justify-self-center mb-4 rounded-md text-white font-bold lg:py-0 lg:h-10 lg:w-32 lg:mb-0 lg:mr-6 hover:opacity-60 duration-300"
                            disabled>Copied!</button>
                        ) : (
                            <button 
                            className=" bg-cYan text-center lg:py-0 lg:h-10 lg:w-32 w-11/12 py-2 justify-self-center mb-4 rounded-md text-white font-bold lg:mb-0 lg:mr-6 hover:opacity-60 duration-300"
                            onClick={() => handleCopy(link.short)}>Copy</button>
                        )}
                        </div>
                </div>
            ))}
        </>
    );
}
 
export default ShortLink;