import React, { useState } from 'react';
import ScrapCard from '../scrap/ScrapCard'; // Updated import

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllScrapQuery } from '../../redux/features/scrap/scrapApi'; // Updated API hook

const categories = [
    "All Categories", 
    "Metal", 
    "Plastic", 
    "Electronics", 
    "Paper", 
    "Glass"
];

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const { data: scrapItems = [] } = useFetchAllScrapQuery();

    // Filter items based on category selection
    const filteredScrap = selectedCategory === "All Categories" 
        ? scrapItems 
        : scrapItems.filter(item => item.category === selectedCategory.toLowerCase());

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
                Top-Selling Scrap Materials
            </h2>

            {/* Category Filtering */}
            <div className="mb-8 flex items-center">
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border bg-gray-200 border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {filteredScrap.length > 0 &&
                    filteredScrap.map((scrap, index) => (
                        <SwiperSlide key={index}>
                            <ScrapCard scrap={scrap} /> {/* Updated component */}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default TopSellers;
