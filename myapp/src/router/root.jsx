
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";

const Loading=<div>Loading...</div>;
const Home=lazy(()=>import('../pages/HomePage'));
const Post=lazy(()=>import('../pages/PostPage'));

const root=createBrowserRouter([
  {
    element: <DefaultLayout />,
    children:[
      {index:true, element: <Suspense fallback={Loading}><Home /></Suspense>},
      {path:'/post', element: <Post />}
    ]
  }
])
export default root;