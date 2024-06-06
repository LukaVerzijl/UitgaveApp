import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavBar from "@/components/ui/navBar";
import { userQueryOptions } from "@/lib/api";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

function Login() {
  return (
    <div className="m-auto mt-[100px]">
      <Card className="h-[200px]">
        <CardHeader>
          <CardTitle className="flex m-auto">Inloggen</CardTitle>
          <CardDescription className="flex m-auto">
            U kunt hieronder inloggen of registreren
          </CardDescription>
        </CardHeader>
        <CardContent className="m-auto gap-5 ">
          <Button className="mt-4 m-auto flex" asChild>
            <a href="/api/login" className=" w-1/2 m-auto">
              Login / Registreer
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function Component() {
  const user = Route.useRouteContext();

  if (!user.user) {
    return (
      <>
        <NavBar />
        <hr />
        <div className="p-2  gap-2 max-w-2xl m-auto">
          <Login />
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <hr />
        <div className="p-2  gap-2 max-w-2xl m-auto">
          <Outlet />
        </div>
      </>
    );
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
