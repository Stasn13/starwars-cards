import { createFileRoute, Link } from "@tanstack/react-router";
import { useGetCards } from "../hooks/useGetCards";
import { Box, Input, Typography } from "@mui/material";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetCards(searchValue);

  console.log(data);

  return (
    <div className="p-2">
      <Typography>Cards goes here</Typography>
      <Input onChange={(e) => setSearchValue(e.target.value)} />
      {isLoading && <p>Loading...</p>}
      <Box gap={2} display="flex" flexWrap="wrap">
        {data?.map((card) => (
          <Link to={`/details/${card.properties.uid}`}>
            <Typography>{card.properties.name}</Typography>
          </Link>
        ))}
      </Box>
    </div>
  );
}
