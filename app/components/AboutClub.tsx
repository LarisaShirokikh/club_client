// components/AboutClub.tsx
import React from "react";

const AboutClub: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Текстовая часть */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О клубе</h2>
          <p className="text-lg mb-4">
            Наш клуб создан для того, чтобы помочь родителям лучше понимать
            образовательные и воспитательные потребности своих детей. Мы
            предлагаем полезные ресурсы, советы экспертов и пространство для
            общения и обмена опытом.
          </p>
          <p className="text-lg mb-8">
            Присоединяйтесь к нам, чтобы вместе строить светлое будущее для
            наших детей!
          </p>
          <a
            href="/join"
            className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Узнать больше
          </a>
        </div>

        {/* Изображение или иконка */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/img/about-club.jpg" // Путь к изображению в папке public
            alt="About the Club"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutClub;
