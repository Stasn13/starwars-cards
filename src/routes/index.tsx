import { createFileRoute } from "@tanstack/react-router";
import { useGetCards } from "../hooks/useGetCards";
import { Input } from "@mui/material";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, isLoading } = useGetCards();

  console.log(data);
  return (
    <div className="p-2">
      <h3>Cards goes here</h3>
      <Input onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
