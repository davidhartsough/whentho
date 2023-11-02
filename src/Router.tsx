import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Launch from "./launch/Launch";
import TimeZoneTable from "./tzt/TimeZoneTable";
import timeZoneTableLoader from "./tzt/loader";
import Days from "./days/Days";
import daysLoader from "./days/loader";
import Poll from "./poll/Poll";
import pollLoader from "./poll/loader";
import pollAction from "./poll/action";
import PageLoader from "./loader/PageLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "c",
    element: <Launch />,
  },
  {
    path: "t",
    element: <TimeZoneTable />,
    loader: timeZoneTableLoader,
  },
  {
    path: "d",
    element: <Days />,
    loader: daysLoader,
  },
  {
    path: "poll",
    action: pollAction,
  },
  {
    path: "p",
    element: <Poll />,
    loader: pollLoader,
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<PageLoader />} />;
}
