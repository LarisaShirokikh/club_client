// components/MainBanner.tsx
import Image from "next/image";
import React from "react";

const MainBanner: React.FC = () => {
  return (
    <section className="text-gray-600 py-16 rounded-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
        {/* Текстовая часть */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Клуб родителей
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The best place to find everything you need for your journey.
          </p>
          <a
            
            href="/learn-more"
            className="bg-[#e677af] text-white hover:bg-[#d14484] font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Вступить
          </a>
        </div>

        {/* Изображение */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/img/1.jpg" // Путь к изображению в папке public
            alt="Parents Club"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
