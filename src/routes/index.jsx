/* System Modules' imports */
import React, { lazy, Suspense, useEffect } from "react";

/* Dependencies' imports */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/ui/Loader";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";
const Home = lazy(() => import("@/pages/Home/index.jsx"));

const Error404 = lazy(() => import("@/pages/errors/Error404.jsx"));

const AppRoutes = () => {
  const { userModules, loading } = useAuth();

  if (loading) return <Loader />;

  const routeComponentMap = {
    "": <Home />,
    "admin-panel": <Home />,
  };

  const dynamicRoutes = userModules?.map((form) => {
    const path = form.path;
    const element = routeComponentMap[path];
    if (!element) return null;
    const permission = form.permission==='read_write'?true:false
    const elementWithProps = React.cloneElement(element, { permission: permission });
    return <Route key={path} path={path} element={elementWithProps} />;
  });


  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
      <Route key={'app'} path={"/"} element={<Home />} />
       {dynamicRoutes}
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

const Index = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default Index;
