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
    <div className="p-2 flex justify-between max-w-2xl m-auto items-baseline">
      <Link to="/">
        <h1 className="text-2xl font-bold">Uitgave app</h1>
      </Link>
      <div className="flex gap-2">
        <Link to="/totalexpeses" className="[&.active]:font-bold">
          Totaal
        </Link>
        <Link to="/expenses" className="[&.active]:font-bold">
          Uitgaves
        </Link>
        <Link to="/create-expense" className="[&.active]:font-bold">
          Nieuw
        </Link>
        <Link to="/profile" className="[&.active]:font-bold">
          Profiel
        </Link>
      </div>
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
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
