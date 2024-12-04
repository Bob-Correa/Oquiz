ALTER TABLE "user" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'user';
UPDATE "user" SET role = 'admin' WHERE id = 1;