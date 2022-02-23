import React from 'react';
import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import MovieCard from '../MovieCard/MovieCard';
import "swiper/css";
import "swiper/css/navigation";

const Slider = (props) => {
    return (
        <div className={styles.swiperContainer}>
            <h2>{props.categorie.name}</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className={styles.slider}
            >
                 {
                    props.categorie.movies.map((movie) =>(
                        <SwiperSlide className={styles.slide} key={movie}>
                            <MovieCard movie={movie}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;