import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";
export const usegetBanner = () => {
  return useQuery({
    queryKey: ["bannerData"],
    queryFn: () => {
      return request.get("/banners").then((res) => res.data);
    },
  });
};
