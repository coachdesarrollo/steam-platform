import { createFileRoute } from "@tanstack/react-router";
import { Carrousel } from "./components/carrousel";

export const Route = createFileRoute("/login/profile/")({
  component: ProfilePage,
});

function ProfilePage() {
  return <Carrousel />
}
