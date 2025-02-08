"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Main1 from '@/public/imgs/menu/main1.png';
import Main2 from '@/public/imgs/menu/main2.png';
import Image from "next/image";

export const MainCarousel = () => {
    return (
        <div className="w-full max-w-[1220px] px-4 md:px-0 mx-auto">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="absolute right-0 md:right-4 z-10 btn-arrow"
                        />
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="absolute left-0 md:left-4 z-10 btn-arrow rotate-180"
                        />
                    )
                }
            >
                <div className="h-[200px] md:h-[400px] lg:h-[500px] relative">
                    <Image
                        src={Main1}
                        alt="carousel"
                        fill
                        className="object-cover rounded-2xl md:rounded-[2rem]"
                    />
                </div>
                <div className="h-[200px] md:h-[400px] lg:h-[500px] relative">
                    <Image
                        src={Main2}
                        alt="carousel"
                        fill
                        className="object-cover rounded-2xl md:rounded-[2rem]"
                    />
                </div>
            </Carousel>
        </div>
    );
}