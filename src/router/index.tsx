import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../layout/Error";
import Index from "../pages/main";
import Main from "../layout/main";
import Agenda from "../pages/agenda";
import Archive from "../pages/archive";
import NotFound from "../layout/NotFound";


const routes = [
  /* {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
  }, */
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "agenda",
        element: <Agenda />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
    ]
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