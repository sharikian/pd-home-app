"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Main1 from '@/public/imgs/menu/main1.png';
import Main2 from '@/public/imgs/menu/main2.png';
import Image from "next/image";

export const MainCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop showArrows showThumbs={false}>
            <div>
                <Image src={Main1} alt="carousel" style={{borderRadius: '2rem'}} />
            </div>
            <div>
                <Image src={Main2} alt="carousel" style={{borderRadius: '2rem'}} />
            </div>
        </Carousel>
    );
  }