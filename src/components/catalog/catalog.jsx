import React from "react";
import { usegetCatalog } from "./service/usegetCatalog";

export const Catalog = () => {
  const { data } = usegetCatalog();
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 flex flex-col items-center"
        >
          <img src={item.img} alt={item.text} className="h-24 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{item.text}</h3>
          <button className="text-red-500">Показать все</button>
        </div>
      ))}
    </div>
  );
};
