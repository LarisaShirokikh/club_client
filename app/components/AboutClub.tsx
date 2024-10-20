// components/AboutClub.tsx
import React from "react";

const AboutClub: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-8 text-center">
          О клубе
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Карточка 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              Наша миссия
            </h3>
            <p className="text-gray-600">
              Мы стремимся помочь родителям лучше понять образовательные и
              воспитательные потребности их детей, предоставляя полезные ресурсы
              и советы.
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              Сообщество и поддержка
            </h3>
            <p className="text-gray-600">
              Клуб предоставляет пространство для общения и обмена опытом, где
              родители могут находить поддержку и ответы на вопросы, связанные с
              воспитанием и обучением детей.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex-1">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              Экспертные советы
            </h3>
            <p className="text-gray-600">
              Мы предлагаем консультации и рекомендации от специалистов в
              области образования и психологии, чтобы помочь вам принимать
              обоснованные решения для вашего ребёнка.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClub;
