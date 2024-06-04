import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/expenses")({
  component: Expenses,
});
async function getAllExpenses() {
  const result = await api.expenses.$get();
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = result.json();
  return data;
}

function Expenses() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-all-expenses"],
    queryFn: getAllExpenses,
  });

  if (error) return <div>Error: {error.message}</div>;
  return <div>{isPending ? "..." : JSON.stringify(data)}</div>;
}
