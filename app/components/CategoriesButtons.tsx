// components/CategoriesButtons.tsx
import React from "react";

const CategoriesButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      <button className="bg-blue-500 text-2xl text-white py-2 px-6 rounded-xl transition duration-300 hover:bg-blue-600">
        Дошкольники
      </button>
      <button className="bg-green-500 text-2xl text-white py-2 px-6 rounded-xl transition duration-300 hover:bg-green-600">
        Начальная школа
      </button>
      <button className="bg-yellow-500 text-2xl text-white py-2 px-6 rounded-xl transition duration-300 hover:bg-yellow-600">
        Средняя школа
      </button>
      <button className="bg-red-500 text-2xl text-white py-2 px-6 rounded-xl transition duration-300 hover:bg-red-600">
        Старшие классы
      </button>
    </div>
  );
};

export default CategoriesButtons;
