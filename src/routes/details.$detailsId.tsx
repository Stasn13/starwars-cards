import { createFileRoute } from "@tanstack/react-router";
import { useGetDetails } from "../hooks/useGetDetails";
import { useUpdateDetails } from "../hooks/useUpdateDetails";
import { Box, Button } from "@mui/material";
import { Title } from "../components/Typography";
import { useState } from "react";
import InputEdit from "../components/InputEdit";

export const Route = createFileRoute("/details/$detailsId")({
  component: Details,
});

function Details() {
  const { detailsId } = Route.useParams();
  const { data, isLoading, error } = useGetDetails(detailsId);
  const [editMode, setEditMode] = useState(false);
  const updateMutation = useUpdateDetails(detailsId);

  if (isLoading) {
    return <div>Loading hero details...</div>;
  }

  if (error || !data) {
    return <div>Error loading hero details.</div>;
  }

  const { properties } = data;

  console.log(data);

  return (
    <Box sx={{ maxWidth: "512px" }}>
      <form
        className="p-4 max-w-2xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.currentTarget;
          const formData = new FormData(form);

          const updatedProperties = {
            name: (formData.get("name") as string) || properties.name,
            height: (formData.get("height") as string) || properties.height,
            mass: (formData.get("mass") as string) || properties.mass,
            eye_color:
              (formData.get("eye_color") as string) || properties.eye_color,
            birth_year:
              (formData.get("birth_year") as string) || properties.birth_year,
            gender: (formData.get("gender") as string) || properties.gender,
            hair_color:
              (formData.get("hair_color") as string) || properties.hair_color,
            skin_color:
              (formData.get("skin_color") as string) || properties.skin_color,
          };

          updateMutation.mutate(updatedProperties);
          setEditMode(false);
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Title>Name:</Title>
          <InputEdit
            placeholder={properties.name}
            disabled={!editMode}
            name="name"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Height:</Title>
          <InputEdit
            placeholder={properties.height}
            disabled={!editMode}
            name="height"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Mass:</Title>
          <InputEdit
            placeholder={properties.mass}
            disabled={!editMode}
            name="mass"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Eye Color:</Title>
          <InputEdit
            placeholder={properties.eye_color}
            disabled={!editMode}
            name="eye_color"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Birth Year:</Title>
          <InputEdit
            placeholder={properties.birth_year}
            disabled={!editMode}
            name="birth_year"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Gender:</Title>
          <InputEdit
            placeholder={properties.gender}
            disabled={!editMode}
            name="gender"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Hair Color:</Title>
          <InputEdit
            placeholder={properties.hair_color}
            disabled={!editMode}
            name="hair_color"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Title>Skin Color:</Title>
          <InputEdit
            placeholder={properties.skin_color}
            disabled={!editMode}
            name="skin_color"
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Button
              variant="contained"
              onClick={() => setEditMode(!editMode)}
              sx={{ mr: 2 }}
            >
              {editMode ? "Cancel" : "Edit"}
            </Button>
            {editMode && (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={updateMutation.isPending}
              >
                {updateMutation.isPending ? "Updating..." : "Save"}
              </Button>
            )}
          </Box>
        </Box>
        {updateMutation.isSuccess && (
          <div style={{ color: "green" }}>
            Hero details updated successfully!
          </div>
        )}
        {updateMutation.isError && (
          <div style={{ color: "red" }}>Error updating hero details</div>
        )}
      </form>
    </Box>
  );
}
