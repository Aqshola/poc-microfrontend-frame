import { createRoute, createRouter } from "@tanstack/react-router";
import rootRoute from "./root";
import Login from "../pages/auth/Login";
import Base from "../pages/base/Base";
import PrivateLayout from "../components/layout/PrivateLayout";

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const baseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PrivateLayout,
});

const baseChild = createRoute({
  getParentRoute: () => baseRoute,
  path: "base",
  component: Base,
});

baseRoute.addChildren([baseChild]);

const routeTree = rootRoute.addChildren([baseRoute, loginRoute]);

const router = createRouter({
  routeTree,
});

export default router;
