import React, { useState } from "react";
import Logo from "./navbarImg/logo.png";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { Catalog } from "../catalog/catalog";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 border-b">
        {/* Left Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-4" />
          <button
            onClick={toggleModal}
            className="bg-yellow-400 text-black px-4 py-2 rounded-md flex items-center"
          >
            <FaBars className="h-5 w-5 mr-2" />
            Каталог
          </button>
        </div>

        {/* Center Section */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full px-4 py-2 border rounded-md"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaUser className="h-6 w-6 mr-2" />
            Войти
          </div>

          <div className="flex items-center">
            <FaHeart className="h-6 w-6 mr-2" />
            Избранное
          </div>

          <div className="relative flex items-center">
            <FaShoppingCart className="h-6 w-6" />
            <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              0a
            </div>
            Корзина
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-[900px]">
            <h2 className="text-lg font-bold mb-4">Каталог</h2>
            <Catalog />
            <button
              onClick={toggleModal}
              className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
