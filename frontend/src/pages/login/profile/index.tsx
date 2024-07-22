import { createFileRoute } from "@tanstack/react-router";
import { Portal } from "./components/portal";

export const Route = createFileRoute("/login/profile/")({
  component: ProfilePage,
});

function ProfilePage() {
  return <Portal />
}
