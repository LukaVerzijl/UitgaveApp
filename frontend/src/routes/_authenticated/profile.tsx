import { api, userQueryOptions } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Profile,
});

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions);
  if (isPending) return "loading...";
  if (error) return "user not logged in...";
  return (
    <div className="p-2">
      Profile Page
      <p>Hallo! {data.user.given_name}</p>
      <a href="/api/logout">Logout</a>
    </div>
  );
}
