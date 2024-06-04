import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { api } from "@/lib/api";
export const Route = createFileRoute("/_authenticated/create-expense")({
  component: CreateExpense,
});

function CreateExpense() {
  const nav = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      amount: 0,
    },

    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await api.expenses.$post({ json: values.value });
      if (!res.ok) {
        throw new Error("Failed to create expense");
      }
      nav({ to: "/expenses" });
      console.log(values);
    },
  });
  return (
    <div className="p-2">
      <h2>create-expense</h2>
      <form
        className="max-w-xl m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <form.Field
          name="title"
          children={(field) => (
            <div>
              <Label htmlFor={field.name}>Titel</Label>
              <Input
                type={field.name}
                id={field.name}
                name={field.name}
                required={true}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.touchedErrors ? (
                <em>{field.state.meta.touchedErrors}</em>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </div>
          )}
        ></form.Field>
        <form.Field
          name="amount"
          children={(field) => (
            <div>
              <Label htmlFor={field.name}>Hoeveelheid</Label>
              <Input
                type="number"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
              />
              {field.state.meta.touchedErrors ? (
                <em>{field.state.meta.touchedErrors}</em>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </div>
          )}
        ></form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button className="mt-4" type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </Button>
          )}
        />
      </form>
    </div>
  );
}
