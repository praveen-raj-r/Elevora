import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/app-layout";
import Landing from "./pages/landing";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-jobs";
import JobPage from "./pages/job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        children: [
          {
            path: "/",
            element: <Landing />,
          },
          {
            path: "/onboarding",
            element: <Onboarding />,
          },
          {
            path: "/jobs",
            element: <JobListing />,
          },
          {
            path: "/post-job",
            element: <PostJob />,
          },
          {
            path: "/my-jobs",
            element: <MyJobs />,
          },
          {
            path: "/saved-jobs",
            element: <SavedJobs />,
          },
          {
            path: "/job/:id",
            element: <JobPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
