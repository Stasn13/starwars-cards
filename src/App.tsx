import { Input } from "@mui/material";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetCards } from "./hooks/useGetCards";

const queryClient = new QueryClient();

function App() {
  const { data, isLoading } = useGetCards();

  console.log(data);
  return (
    <QueryClientProvider client={queryClient}>
      <h1>cards</h1>
      <Input onChange={(e) => console.log(e.target.value)} />
    </QueryClientProvider>
  );
}

export default App;
