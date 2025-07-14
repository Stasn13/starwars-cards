import { Box } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Box
      component={"main"}
      sx={{ padding: "2rem", maxWidth: "1280px", margin: "0 auto" }}
    >
      {/* TODO: some logo here */}
      <Outlet />
      <TanStackRouterDevtools />
    </Box>
  ),
});
