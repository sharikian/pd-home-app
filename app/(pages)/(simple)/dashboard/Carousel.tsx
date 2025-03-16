"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Main1 from '@/public/imgs/menu/main1.png';
import Main2 from '@/public/imgs/menu/main2.png';
import Image from "next/image";

export const MainCarousel = () => {
  return (
    <div className="w-full">
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
              className="absolute right-4 md:right-8 z-10 btn-arrow w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm hover:bg-white/50 transition-all"
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 md:left-8 z-10 btn-arrow rotate-180 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm hover:bg-white/50 transition-all"
            />
          )
        }
      >
        <div className="relative aspect-[2.4/1]">
          <Image
            src={Main1}
            alt="carousel"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <div className="relative aspect-[2.4/1]">
          <Image
            src={Main2}
            alt="carousel"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </Carousel>
    </div>
  );
}