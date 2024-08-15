import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const usegetAds = () => {
    return useQuery({
        queryKey: ["adsData"],
        queryFn: () => {
            return request.get("/ads").then((res) => res.data);
        },
    });
};
