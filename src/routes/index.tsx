import { createFileRoute } from "@tanstack/react-router";
import { useGetCards } from "../hooks/useGetCards";
import { Box, Pagination, Typography, TextField } from "@mui/material";
import { useState } from "react";
import HeroCard from "../components/HeroCard";

export const Route = createFileRoute("/")({
  component: Index,
});

const debounce = (
  fn: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ms: number
) => {
  let timeoutId: number;
  return function (
    this: ThisType<unknown>,
    ...args: [e: React.ChangeEvent<HTMLInputElement>]
  ) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn.apply(this, args), ms);
  };
};

function Index() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetCards(searchValue, page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Unexpected error</div>;
  }

  return (
    <Box p={2} display="flex" flexDirection="column" gap={2}>
      <Typography variant="h1" fontWeight="bold" mt={8}>
        Star Wars heroes:
      </Typography>
      <TextField
        color="primary"
        placeholder="Search..."
        sx={{ maxWidth: "300px" }}
        onChange={debounce(
          (e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value),
          300
        )}
        variant="outlined"
      />
      <Box gap={2} display="flex" flexWrap="wrap">
        {data.result.map((card) => (
          <HeroCard
            key={card.uid}
            properties={card.properties}
            uid={card.uid}
          />
        ))}
      </Box>
      {data.total_pages > 1 && (
        <Pagination
          count={data.total_pages}
          page={page}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      )}
    </Box>
  );
}
