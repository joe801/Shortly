import { useEffect, useState } from "react";
import ShortLink from "./ShortLink";
//import bg_boost_mobile from './images/bg-boost-mobile.svg';

const FormLink = () => {
    const [inputLink, setInputLink] = useState("");
    const [linkList, setLinkList] = useState([]);
    const [emptyInput, setEmptyInput] = useState(false);
    const linkInputClass1 = "py-3 pl-4 outline-none rounded-md md:col-span-3 border-0";
    const linkInputClass2 = "py-3 pl-4 outline-none rounded-md md:col-span-3 border-2 border-Red";

   // useEffect(() => {
    //    localStorage.getItem("list");
    //}, []);

    //useEffect(() => {
      //  localStorage.setItem("list", linkList)
    //}, [linkList]);

    useEffect(() => {
        const storedLinkList = localStorage.getItem("linkList");
        if (storedLinkList) {
            setLinkList(JSON.parse(storedLinkList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("linkList", JSON.stringify(linkList));
    }, [linkList]);

    //function to fetch short link and add to list
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputLink) {
            setEmptyInput(true);
        } else {
        fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
        .then((res) => res.json())
        .then((data) => {
            const shortLink = `http://${data.result.short_link}`;
            const shortURL = data.result.short_link;
            const fullLink = inputLink;
            const keys = data.result.code;
            setLinkList(prevList => [...prevList, { short: shortLink, full: fullLink, key: keys, shortURL: shortURL}]);
            setInputLink("");
        });
        setEmptyInput(false);
        }
    }

    // function to copy text to clipboard
    const copyToClipboard = (shortLink) => {
        navigator.clipboard.writeText(shortLink)
            .then(() => {
                console.log("Link copied to clipboard!");
            })
            .catch((error) => {
                console.error("Failed to copy link to clipboard:", error);
            });
    }
    return ( 
        <div >
            <div className=" absolute -top-20 w-full">
                <div className="w-10/12 mx-auto bg-darkViolet rounded-lg bg-bg-shorten-mobile bg-no-repeat bg-right-top md:bg-bg-shorten-desktop bg-cover">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 w-4/5 mx-auto py-8 gap-4 md:grid-cols-4 md:w-11/12">
                        <input 
                        className={emptyInput === false ? 'py-3 pl-4 outline-none rounded-md md:col-span-3 border-0' : 
                        'py-3 pl-4 outline-none rounded-md md:col-span-3 border-2 border-reD placeholder:text-red-300'}
                        id="linkInput"
                        type="text" 
                        placeholder="Shorten a link here... " 
                        value={inputLink}
                        onChange={(e) => setInputLink(e.target.value)}/>
                        <input 
                        className=" bg-cYan text-center py-3 rounded-md text-white font-bold hover:brightness-125 cursor-pointer duration-300"
                        type="submit" 
                        value="Shorten it!" />
                        {emptyInput && <p className=" text-reD text-xs -mt-2">please add a link</p>}
                    </form>
                </div>
            </div>
            <div className="w-full py-12"></div>
        
            <ShortLink list={linkList} copy={copyToClipboard}/>
        </div>
     );
}
 
export default FormLink;