import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ["/", "/contact", "/api/hook", "/sign-up", "/sign-in"],
  publicRoutes: ["/", "/contact", "/api/hook"],
  ignoredRoutes: ["/api/hook", "/api/chatgpt", "/api/(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
