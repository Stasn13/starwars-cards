import { createFileRoute } from "@tanstack/react-router";
import { useGetCards } from "../hooks/useGetCards";
import { Box, Input, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import HeroCard from "../components/HeroCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetCards(searchValue);

  //   Todo: implement pagination
  //   Todo: add debounce

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <Typography variant="h1" fontWeight="bold" mt={12}>
        Star Wars heroes:
      </Typography>
      <Input onChange={(e) => setSearchValue(e.target.value)} />
      <Box gap={2} display="flex" flexWrap="wrap">
        {data?.map((card) => (
          <HeroCard
            key={card.uid}
            properties={card.properties}
            uid={card.uid}
          />
        ))}
      </Box>
      <Pagination count={10} />
    </div>
  );
}
