import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";
export const usegetPhones = () => {
  return useQuery({
    queryKey: ["phonesData"],
    queryFn: () => {
      return request.get("/phones").then((res) => res.data);
    },
  });
};
