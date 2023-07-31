import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
