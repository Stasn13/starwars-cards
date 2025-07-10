import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/details")({
  component: Details,
});

function Details() {
  return <div className="p-2">Hero details page</div>;
}
