import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register/_layout/foo')({
  component: () => <div>Hello /register/layout/foo!</div>
})