import { router } from "./trpc";

export const appRouter = router({
  // add your procedures here
});

export type AppRouter = typeof appRouter;
