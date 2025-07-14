import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/api";
import type { Result } from "../types/Result";

const fetchCards = async (search?: string, page?: number): Promise<Result> => {
  const url = new URL(`${BASE_URL}/people/?expanded=true&limit=10`);

  if (search) {
    url.searchParams.set("name", search);
  }

  if (page) {
    url.searchParams.set("page", page.toString());
  }

  const response = await fetch(url).then((res) => res.json());

  return {...response, result: search ? response.result : response.results};
};

const useGetCards = (searchValue?: string, page?: number) => {
  return useQuery({
    queryKey: ["cards", searchValue, page],
    queryFn: () => fetchCards(searchValue, page),
  });
};

export { useGetCards };
