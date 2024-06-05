import { createFileRoute } from "@tanstack/react-router";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/totalexpeses")({
  component: Index,
});

async function totalSpend() {
  const result = await api.expenses["total-spent"].$get();
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = result.json();
  return data;
}

function Index() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-total-expenses"],
    queryFn: totalSpend,
  });

  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Card className="w-[350px] m-auto">
        <CardHeader>
          <CardTitle>Totale Uitgaves</CardTitle>
          <CardDescription>Bekijk hier je totale uitgaves</CardDescription>
        </CardHeader>
        <CardContent>{isPending ? "..." : data.total}</CardContent>
      </Card>
    </>
  );
}
