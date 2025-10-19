import { createRoute, createRouter } from "@tanstack/react-router";
import rootRoute from "./root";
import Login from "../pages/auth/Login";
import Base from "../pages/base/Base";

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const baseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Base,
});
const routeTree = rootRoute.addChildren([baseRoute, loginRoute]);

const router = createRouter({
  routeTree,
});

export default router;
