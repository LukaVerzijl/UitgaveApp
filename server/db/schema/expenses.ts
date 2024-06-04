import { index, numeric, pgTable, serial, text } from "drizzle-orm/pg-core";

export const expenses = pgTable('expenses', {
    id: serial('id').primaryKey(),
    userid: text('userid').notNull(),
    title: text('title').notNull(),
    amount: numeric('amount', {precision: 12, scale: 2}).notNull(),
}, (expenses) => {
    return {
        userIdIndex: index("name_idx").on(expenses.userid)
    }
})