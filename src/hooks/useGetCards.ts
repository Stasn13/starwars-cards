import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";
import type { Card } from "../types/Card";

const fetchCards = async (search?: string): Promise<Card[]> => {
  const url = new URL(`${BASE_URL}/people/?expanded=true`);

  if (search) {
    url.searchParams.set("name", search);
  }

  const response = await fetch(url).then((res) => res.json());
  const result = search ? response.result : response.results;

  return result;
};

const useGetCards = (searchValue?: string) => {
  return useQuery({
    queryKey: ["cards", searchValue],
    queryFn: () => fetchCards(searchValue),
  });
};

export { useGetCards };
