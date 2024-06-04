import { type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RootContext {
  queryClient: QueryClient;
}
export const Route = createRootRouteWithContext<RootContext>()({
  component: Root,
});

function NavBar() {
  return (
    <div className="p-2 flex gap-2 max-w-2xl m-auto">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/expenses" className="[&.active]:font-bold">
        Uitgave
      </Link>
      <Link to="/create-expense" className="[&.active]:font-bold">
        Toevoegen
      </Link>
      <Link to="/profile" className="[&.active]:font-bold">
        Profiel
      </Link>
    </div>
  );
}

function Root() {
  return (
    <>
      <NavBar />
      <hr />
      <div className="p-2  gap-2 max-w-2xl m-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
