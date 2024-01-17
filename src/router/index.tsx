import  { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../layout/Error";

const Page = lazy(() => import("../layout/Home"));
const Index = lazy(() => import("../pages/main"));
const NotFound = lazy(() => import("../layout/NotFound"));

const routes = [
  /* {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
  }, */
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  /* {
    path: "/page",
    element: <MPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            title: "首页",
            icon: <DashboardOutlined />,
            element: <Home />,
          },
        ],
      },
    ],
  }, */
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };

export default createBrowserRouter(routes);