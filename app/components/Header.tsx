// components/Header.tsx
import { Rocket} from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Логотип */}
        <div className="text-4xl font-bold text-[#e677af] flex justify-between items-center gap-2">
          <Rocket color="#e677af" size={40} />
          <a href="/">УМНЫЙ</a>
        </div>

        {/* Навигационное меню */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-[#d14484]">
            О клубе
          </a>
          <a href="/" className="text-gray-700 hover:text-[#d14484]">
            Учебники
          </a>
        </nav>

        {/* Кнопка Вход */}
        <div>
          <button className="bg-[#e677af] text-white px-4 py-2 rounded-xl hover:bg-pink-600">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
