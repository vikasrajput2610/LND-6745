import React, { useState, useEffect } from 'react';
import { fetchData, imageURL } from '../data/getData';
import bgImage from '../images/pngwing.com.png'
import profileImg from '../images/profile.png'
const Header = () => {
    const [image, setImage] = useState();
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        const fetchDataAndSetImage = async () => {
            const result = await fetchData('originals');
            const randomData = result[Math.floor(Math.random() * result.length)];
            setImage(randomData.backdrop_path);
            console.log("my random data is ==>>>", randomData)
            if (randomData.overview && randomData.overview.length !== 0) {
                const val = randomData.overview.split(" ").slice(0, 40).join(" ");
                setDescription(val);
            }
            
            setTitle(randomData.original_name)
        };

        fetchDataAndSetImage();

        const interval = setInterval(() => {
            fetchDataAndSetImage();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
        className="w-full bg-center bg-cover flex flex-col justify-around relative"
        style={{
            height: "35rem",
        }}
    >
        {/* Background overlay */}
        <div
            className="absolute inset-0 bg-black opacity-50 z-0"
            style={{
                backgroundImage: `url(${image ? `${imageURL}${image}` : ''})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        ></div>
    
        {/* Content */}
        <ul className="flex justify-between m-5 z-10">
            <li className="h-12">
                <img className="h-full" src={bgImage} alt="" />
            </li>
            <li className="h-12">
                <img className="h-full" src={profileImg} alt="" />
            </li>
        </ul>
    
        <div className="h-3/5 text-white font-bold w-1/5 opacity-100 ml-14 z-10">
            <p className="text-5xl font-bold">{title}</p>
            <p className="flex mt-5 w-4/5 justify-around">
                <span>Play</span>
                <span>My List</span>
            </p>
            <p className="mt-5">{description ? description : ""}</p>
        </div>
    </div>
    
    );
}

export default Header;
