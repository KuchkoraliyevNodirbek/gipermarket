import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const usegetCatalog = () => {
  return useQuery({
    queryKey: ["catalogData"],
    queryFn: () => {
      return request.get("/catalog").then((res) => res.data);
    },
  });
};
