import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  // var prisma: PrismaClient;
}

export const prisma =
  // global.prisma ||
  new PrismaClient({
    // log:
    //   env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

// if (process.env.NODE_/
