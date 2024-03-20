"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Dashboard() {
  return (
    <main className="p-4">
      <section className="flex justify-between">
        <div id="left-text">
          <h1 className="text-3xl">Hi, David 👋</h1>
          <h2 className="text-xl text-gray-500">Explore the world</h2>
        </div>
        <img
          className="w-[50px] h-[50px] rounded-full "
          src="/profile-pic.jpg"
          id="right-nav"
        />
      </section>
      <section id="search-section" className="mother relative mt-5">
        <input
          type="text"
          placeholder="Search places"
          className="w-full py-4 px-6  border-2 border-gray-200 rounded-md"
        />
        <button>
          <img className="absolute top-5 right-6" src="/icon-setting.svg" />
        </button>
      </section>
      <section id="card-section" className="mt-12">
        <div className="flex justify-between">
          <h2 className="text-xl">Popular Places</h2>
          <a href="#" className="text-gray-500">
            View all
          </a>
        </div>
        <Swiper className="my-8" spaceBetween={12} slidesPerView={2.8}>
          <SwiperSlide className="tag-menu active">Most Viewed</SwiperSlide>
          <SwiperSlide className="tag-menu">Nearby</SwiperSlide>
          <SwiperSlide className="tag-menu">Latest</SwiperSlide>
          <SwiperSlide className="tag-menu">Popularity</SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
