import { userQueryOptions } from "@/lib/api";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

function Login() {
  return (
    <a href="/api/login">
      <div>Please Login</div>
    </a>
  );
}

function Component() {
  const user = Route.useRouteContext();

  console.log(user);
  if (!user.user) {
    return <Login />;
  } else {
    return <Outlet />;
  }
}
// src/routes/_authenticated.tsx
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;

    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      console.log(data);
      return data;
    } catch (error) {
      return { user: null };
    }
  },
  component: Component,
});
