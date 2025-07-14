import { createFileRoute } from "@tanstack/react-router";
import { useGetDetails } from "../hooks/useGetDetails";
import { Box } from "@mui/material";
import { Description, Title } from "../components/Typography";
// import { useGetCards } from "../hooks/useGetCards";

export const Route = createFileRoute("/details/$detailsId")({
  component: Details,
});

function Details() {
  const { detailsId } = Route.useParams();
  const { data, isLoading, error } = useGetDetails(detailsId);

  if (isLoading) {
    return <div>Loading hero details...</div>;
  }

  if (error || !data) {
    return <div>Error loading hero details.</div>;
  }

  const { properties } = data;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Box sx={{ maxWidth: "512px" }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Name:</Title>
          <Description>{properties.name}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Height:</Title>
          <Description>{properties.height}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Mass:</Title>
          <Description>{properties.mass}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Eye Color:</Title>
          <Description>{properties.eye_color}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Birth Year:</Title>
          <Description>{properties.birth_year}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Gender:</Title>
          <Description>{properties.gender}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Hair Color:</Title>
          <Description>{properties.hair_color}</Description>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Title>Skin Color:</Title>
          <Description>{properties.skin_color}</Description>
        </Box>
      </Box>
    </div>
  );
}
