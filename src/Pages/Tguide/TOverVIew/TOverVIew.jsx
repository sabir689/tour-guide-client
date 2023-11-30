import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/img1.jpg';
import slide2 from '../../../assets/img1.jpg';
import slide3 from '../../../assets/img1.jpg';
import slide4 from '../../../assets/img1.jpg';
import slide5 from '../../../assets/img1.jpg';
import SectionTitle from '../../../Components/SectionTitle/Sectiontitle';




const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Tell Us where u Need any Guuide"}
                heading={"Contact With us any time U want"}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Maldives</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">bangladesh</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">India</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">norway</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Italy</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;