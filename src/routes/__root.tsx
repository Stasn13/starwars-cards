import { Box } from "@mui/material";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Logo from "../assets/Logo";

export const Route = createRootRoute({
  component: () => (
    <Box
      component={"main"}
      sx={{
        padding: "2rem",
        maxWidth: "1280px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
      <Outlet />
      <TanStackRouterDevtools />
    </Box>
  ),
});
