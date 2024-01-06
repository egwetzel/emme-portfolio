import React from "react";
import Button from "../Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const WorkPage = ({ images, name, description, about, links }) => {

    return (
        <div className="mt-10 w-full flex flex-col items-center">
            <div
            className={`w-full bg-gray-50 max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
                <h1 className="text-3xl font-bold">{name}</h1>
                <h2 className="text-xl mt-5">{description}</h2>
                <h2 className="w-4/5 text-xl mt-5 opacity-50">
                    {about}
                </h2>

                <div className={`flex flex-wrap mob:flex-nowrap link`}>
                    {links.map((link, index) => (
                        <Button key={index} onClick={() => window.open(link.url)}>
                        {link.title}
                        </Button>
                    ))}
                </div>

                <Carousel showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index}>
                    <img
                        alt={name}
                        className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                        src={image.src}
                    />
                    </div>
                ))}
                </Carousel>
            </div>
        </div>
    )}

export default WorkPage;