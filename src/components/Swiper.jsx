import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

export default function Fswiper() {

    return (
        <>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 1
            },
          }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            
            <div className=" max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Septiembre 2023</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se termino de crear y diseñar esta pagina web.</p>
                </div>
            </div>

        </SwiperSlide>
      </Swiper>
        </>
    )
  }