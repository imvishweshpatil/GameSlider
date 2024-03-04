"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import "../globals.css";

const images = [
    {
        src:"/rdr2.jpg",
        alt: "Read Dead Redemption",
        title: "Red Dead Redemption",
        buttonLabel: "Buy Now",
        buttonLink: "Read More",
        logoImages: [
            { src: "/xbox.png", alt: "Xbox", width: 100, height: 100},
            { src: "/ps5.png", alt: "ps5", width: 100, height: 100},
            { src: "/windows11.png", alt: "windows11", width: 100, height: 100},
        ],
        fontColor: "black",
        readColor: "white",
    },
    {
        src:"/cod.jpg",
        alt: "Call of Duty",
        title: "Call of Duty",
        buttonLabel: "Buy Now",
        buttonLink: "Read More",
        logoImages: [
            { src: "/xbox.png", alt: "Xbox", width: 100, height: 100},
            { src: "/ps5.png", alt: "ps5", width: 100, height: 100},
            { src: "/windows11.png", alt: "windows11", width: 100, height: 100},
        ],
        fontColor: "black",
        readColor: "black",
    },
    {
        src:"/pubg.jpg",
        alt: "Playerunknowns",
        title: "Playerunknowns",
        buttonLabel: "Buy Now",
        buttonLink: "Read More",
        logoImages: [
            { src: "/xbox.png", alt: "Xbox", width: 100, height: 100},
            { src: "/ps5.png", alt: "ps5", width: 100, height: 100},
            { src: "/windows11.png", alt: "windows11", width: 100, height: 100},
        ],
        fontColor: "black",
        readColor: "white",
    },
    {
        src: '/fh5.jpg',
        alt: 'Forza Horizon5',
        title: 'Forza Horizon5 ',
        buttonLabel: 'BUY NOW',
        buttonLink: 'Read More',
        logoImages: [
            { src: '/xbox.png', alt: 'Xbox', width: 100, height: 100 },
            { src: '/ps5.png', alt: 'PS5', width: 100, height: 100 },
            { src: '/windows11.png', alt: 'Windows 11', width: 150, height: 100 }
        ],
        fontColor: 'black',
        readColor: 'white',
    },
];

const GameSlider = () => {
    const descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum felis ante, et ultrices ipsum fringilla id. Ut neque nunc congue ac enim consectetur, convallis malesuada felis. Maecenas sit amet ligula quis sapien consectetur auctor vel eu dui.ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum felis ante, et ultrices ipsum fringilla id. Ut neque ";

    const [showFullDescription, setShowFullDescription] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [key, setKey] = useState(0);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    useEffect(() => {
        setImageLoaded(false);
        setKey((prevKey) => prevKey + 1);
    }, [currentSlide]);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? prevSlide : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? prevSlide : prevSlide + 1));
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    const { src, title, buttonLabel, fontColor, readColor } = images[currentSlide];

    const nextSlideIndex = (currentSlide) % images.length;
    const nextSlideIndex1 = (currentSlide + 1) % images.length;
    const { src: nextSrc} = images[nextSlideIndex];
    const { src: nextSrc1} = images[nextSlideIndex1];

    return (
        <main>
            <div className="container">
                <div className={"slider"}>
                    <Image
                        src={src}
                        alt={"rdr2"}
                        layout="fill"
                        objectFit="cover"
                        className="responsive-image"
                    />
                    <h1 className="title relative"
                        style={{ marginTop:"65px", paddingLeft: '30px', fontSize: "30px", color: fontColor, fontWeight: 'bold' }}
                    >
                        {title}
                    </h1>
                    <p className={`description relative w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 ${showFullDescription ? 'overflow-visible' : 'overflow-hidden'}`}
                       style={{marginTop:"20px", paddingLeft: '30px', width: "40%", color: fontColor }}
                    >
                        {showFullDescription ? descriptionText : `${descriptionText.split(' ').slice(0, 30).join(' ')}...`}
                    </p>
                    <div className="buttons flex relative"
                         style={{marginTop:"20px"}}
                    >
                        <button className="buynow relative bg-black text-white ml-8 rounded"
                                style={{top:"20%", width:"90px", height:"32px"}}
                        >
                            {buttonLabel}
                        </button>
                        <button className="readmore relative read-more text-black"
                                style={{ marginTop: '2px', marginLeft: '20px', color: readColor }}
                                onClick={toggleDescription}
                        >
                            <u>{showFullDescription ? 'Read Less' : 'Read More'}</u>
                        </button>
                    </div>
                    <div className="image-preview flex justify-end gap-12 mr-14 mt-12">
                        <div className="image-preview1"
                             style={{ width: '12%', height: '200px', position: 'relative', boxShadow: "10px 10px 20px 1px black" }}
                        >
                            <Image src={nextSrc} alt={`Next Slide ${nextSlideIndex}`} layout="fill" objectFit="cover" style={{ borderRadius: "15px" }} />
                        </div>
                        <div className="image-preview2 mt-12"
                             style={{ width: '8%', height: '150px', position: 'relative' }}
                        >
                            <Image src={nextSrc1} alt={`Next Slide ${nextSlideIndex1}`} layout="fill" objectFit="cover" style={{ borderRadius: "15px" }} />
                        </div>
                    </div>
                    <button
                        id="prev-slide"
                        onClick={handlePrevSlide}
                        className={`absolute bottom-0 mb-4 mr-4 right-1/2 transform outline-none border-none cursor-pointer h-12 w-12 z-5 text-white flex items-center justify-center bg-black rounded-full ${
                            currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={currentSlide === 0}
                    >
                        <Image src="/left.png" alt="Previous" width={50} height={50} />
                    </button>
                    <button
                        id="next-slide"
                        onClick={handleNextSlide}
                        className={`absolute bottom-0 mb-4 ml-4 left-1/2 transform outline-none border-none cursor-pointer h-12 w-12 z-5 text-white flex items-center justify-center bg-black rounded-full ${
                            currentSlide === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={currentSlide === images.length - 1}
                    >
                        <Image src="/right.png" alt="Next" width={50} height={50} />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default GameSlider;