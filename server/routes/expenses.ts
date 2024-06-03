import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";



const expenseSchema = z.object({
    id: z.number().positive().min(1),
    title: z.string().min(3).max(100),
    amount: z.number().int().positive()
})

const postschema = expenseSchema.omit({id: true})

type Expense = z.infer<typeof expenseSchema>
export const expensesRoute = new Hono()
.get("/", (c) => {
    return c.json({expenses: []})
})
.post("/", zValidator("json", postschema), async (c) => {
    const data = await c.req.json();
    const expense = postschema.parse(data)
    console.log(expense)
    return c.json(expense)
})
.get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))

    return c.json({id})
})
.delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))

    return c.json({id})
})
.get('/total-spent',async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return c.json({total: 300})
})