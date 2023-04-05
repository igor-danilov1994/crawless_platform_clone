import { memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from './route';

function AppRouter() {
  const isAuth = true;

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
    </Routes>
  );
}

export default memo(AppRouter);
