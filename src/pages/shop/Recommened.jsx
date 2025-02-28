import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrapCard from '../scrap/ScrapCard'; // Updated component name
import { useFetchAllScrapQuery } from '../../redux/features/scrap/scrapApi'; // Updated API hook

const Recommended = () => {
    const { data: scrapItems = [] } = useFetchAllScrapQuery(); // Fetch scrap items

    return (
        <div className="py-16">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
                Recommended Scrap Materials for You
            </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {scrapItems.length > 0 &&
                    scrapItems.slice(0, 10).map((scrap, index) => (
                        <SwiperSlide key={index}>
                            <ScrapCard scrap={scrap} /> {/* Updated component */}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Recommended;
