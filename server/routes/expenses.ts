import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getUser } from "../kinde";



const expenseSchema = z.object({
    id: z.number().positive().min(1),
    title: z.string().min(3).max(100),
    amount: z.number().int().positive()
})

const postschema = expenseSchema.omit({id: true})

type Expense = z.infer<typeof expenseSchema>
export const expensesRoute = new Hono()
.get("/", getUser, (c) => {
    const user = c.var.user;
    return c.json({expenses: []})
})
.post("/", getUser, zValidator("json", postschema), async (c) => {
    const data = await c.req.json();
    const expense = postschema.parse(data)
    console.log(expense)
    return c.json(expense, 201)
})
.get("/:id{[0-9]+}", getUser, (c) => {
    const id = Number.parseInt(c.req.param("id"))

    return c.json({id})
})
.delete("/:id{[0-9]+}", getUser,(c) => {
    const id = Number.parseInt(c.req.param("id"))

    return c.json({id})
})
.get('/total-spent',getUser, async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return c.json({total: 300})
})