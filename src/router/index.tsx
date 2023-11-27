import  { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../layout/Error";

const Page = lazy(() => import("../layout/Home"));
const MPage = lazy(() => import("../layout/MHome"));
const NotFound = lazy(() => import("../layout/NotFound"));

const routes = [
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/m",
    element: <MPage />,
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