import React from "react";
import { usegetPhones } from "./service/usegetPhones";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const PhoneCard = ({ img, title, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="relative">
        <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Новинка
        </span>
      </div>
      <h3 className="mt-4 text-sm font-semibold">{title}</h3>
      <p className="text-lg font-bold mt-2">{price} Сум</p>
      <div className="flex justify-between mt-4">
        <button className="text-yellow-500">
          <FaEye size={20} />
        </button>
        <button className="bg-yellow-500 text-white px-2 py-1 rounded">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export const Phones = () => {
  const { data } = usegetPhones();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Смартфоны и планшеты</h2>
      <div className="grid grid-cols-5 gap-6">
        {data.map((phone) => (
          <PhoneCard
            key={phone.id}
            img={phone.img}
            title={phone.title}
            price={phone.price}
          />
        ))}
      </div>
    </div>
  );
};
