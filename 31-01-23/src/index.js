import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import PostList from "./routes/PostList";
import MainLayout from "./layouts/mainLayout";
import UserList from "./routes/UserList";
import User from "./routes/User";
import Post from "./routes/Post";

import "./index.css";
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
]);
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:postId" element={<Post />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
