import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";

export type Card = {
    properties: {
        name: string;
        uid: string;
        url: string;
    }

const fetchCards = async (search?: string): Promise<Card[]> => {
  const url = new URL(`${BASE_URL}/people/?expanded=true`); // TODO: take a look - ?expanded=true - probably solution to reduce requests

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
