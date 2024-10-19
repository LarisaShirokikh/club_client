// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Информация о сайте */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">УМНЫЙ</h3>
          <p className="text-gray-400">© 2024 УМНЫЙ. All rights reserved.</p>
        </div>

        {/* Ссылки на социальные сети */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            ВКонтакте
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        {/* Контактные данные */}
        <div className="text-center md:text-right">
          <p className="text-gray-400">Contact us: info@mysite.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
