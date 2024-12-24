import React, { useEffect, useState } from 'react';
import { fetchData, imageURL } from '../data/getData';
import ReactPlayer from 'react-player';

const Originals = () => {
    const [data, setData] = useState();
    const [flag,setFlag]=useState(false)
    useEffect(() => {
        const getData = async () => {
            const result = await fetchData('trending');
            console.log("the data is ", result)
            setData(result);
        };
        getData(); // Call the async function here
    }, []); // Empty dependency array ensures this runs only once
  
    return (
        <div className='m-5'>
            <div className='text-white font-normal text-3xl '>NETFLIX ORIGINALS</div>
            <div className="flex overflow-x-auto  h-56 w-full mt-5 hide-scrollbar">
                {data
                    ? data.map((item) => (
                        <img  onClick={()=>setFlag(true)}className="h-full ml-2 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer object-cover" src={`${imageURL}${item.poster_path}`} alt={item.title || 'Poster'} />
                    ))
                    : 'Loading...'}
            </div>
            {flag? (
                <div className="video-player h-96 w-2/3 flex justify-around relative">
                    <button 
                        onClick={()=>setFlag(false)}
                        className="absolute top-2 right-2 text-white font-bold text-xl bg-black rounded-full p-2 hover:bg-gray-800"
                    >
                        X
                    </button>
                    <div className="player-wrapper">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=byJ7pxxhaDY"
                            className="react-player"
                            controls
                            playing
                        />
                    </div>
                   
                </div>
            ):""}
           

        </div>
    );
};

export default Originals;
