import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenses")({
  component: CreateExpense,
});
function CreateExpense() {
  return <div>Show all expenses!</div>;
}
