import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";
import type { Card } from "../types/Card";

const fetchDetails = async (id: string): Promise<Card> => {
  const url = new URL(`${BASE_URL}/people/${id}?expanded=true`);

  const response = await fetch(url).then((res) => res.json());

  return response.result;
};

const useGetDetails = (id: string) => {
  return useQuery({
    queryKey: ["details", id],
    queryFn: () => fetchDetails(id),
  });
};

export { useGetDetails };
