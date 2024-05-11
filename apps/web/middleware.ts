import { auth } from "~web/auth";
import { apiAuthPrefixRoute, publicRoute, authRoute } from "./auth/routes";
import { AppRouteHandlerFn } from "../../node_modules/next-auth/lib/types"; // Add the necessary import

const middlware: AppRouteHandlerFn = auth((req) => {
  const { nextUrl, auth } = req;
  const isLoggedIn = !!auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefixRoute);
  const isPublicRoute = publicRoute.includes(nextUrl.pathname);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  return;
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default middlware;
