import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/profile/')({
  component: () => <div>Hello /login/profile/!</div>
})