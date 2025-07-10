import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";

export type Card = {
    name: string;
    id: number;
    image_url: string;
};

const fetchCards = async (search?: string): Promise<Card[]> => {
  const response = await fetch(`${BASE_URL}/people/?name=${search}`)
    .then((res) => res.json());
    
  return response;
};

const useGetCards = (searchValue?: string) => {
  return useQuery({
    queryKey: ["cards", searchValue],
    queryFn: () => fetchCards(searchValue),
  });
};

export { useGetCards };