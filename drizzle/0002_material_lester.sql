ALTER TABLE "expenses" RENAME COLUMN "userid" TO "user_id";--> statement-breakpoint
DROP INDEX IF EXISTS "name_idx";--> statement-breakpoint
ALTER TABLE "expenses" ADD COLUMN "date" date NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "expenses" USING btree (user_id);