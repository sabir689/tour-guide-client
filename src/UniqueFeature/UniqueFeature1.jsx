/* eslint-disable react/no-unescaped-entities */



import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';





import { EffectCoverflow, Pagination } from 'swiper/modules';
const UniqueFeature1 = () => {
    return (
        <>
            <div className='mt-20 mb-10'>
                <h2 className='text-center text-2xl text-orange-400'>Tour Gallery</h2>
                <h1 className='text-center text-4xl'>
                    Best Tourist's Shared <br />
                    Photos </h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                style={{ width: '100%', paddingTop: '50px', paddingBottom: '50px' }}
            >
                 <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/N6wvJxz/tour1.jpg" style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/6Wf8QSV/tour2.jpg" style={{ display: 'block', width: '100%' }}/>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/px0vBBF/tour3.jpg"style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/GsczTh5/tour4.jpg"style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/CbsJBMC/tour5.jpg"style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/r0NTq6r/tour6.jpg"style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/99MngKg/tour7.jpg"style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/N6wvJxz/tour1.jpg"style={{ display: 'block', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src="https://i.ibb.co/C6ckxNm/tour8.jpg" style={{ display: 'block', width: '100%' }}/>
                </SwiperSlide>
            </Swiper>
             <style>

      </style>
        </>
    );
};

export default UniqueFeature1;