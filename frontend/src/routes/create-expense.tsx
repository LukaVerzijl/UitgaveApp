import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
export const Route = createFileRoute("/create-expense")({
  component: CreateExpense,
});

function CreateExpense() {
  const form = useForm({
    defaultValues: {
      title: "",
      amount: 0,
    },

    onSubmit: async (values) => {
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
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
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
                onChange={(e) => field.handleChange()}
              />
            </div>
          )}
        ></form.Field>
        <Button className="mt-4" type="submit">
          Toevoegen
        </Button>
      </form>
    </div>
  );
}
