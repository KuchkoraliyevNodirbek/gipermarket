import React from "react";
import { usegetAds } from "./service/usegetAds";

export const Ads = () => {
  const { data } = usegetAds();
  return (
    <div className="bg-blue-100 p-4 ">
      <h2 className="text-lg font-bold mb-4">Акции</h2>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((ad) => (
          <div key={ad.id} className="flex items-center justify-center">
            <img
              src={ad.img}
              alt={ad.text}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
