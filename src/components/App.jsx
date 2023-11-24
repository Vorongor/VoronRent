// import style from './App.module.css';
import { Rings } from 'react-loader-spinner';
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./Home'));
const Catalog = lazy(() => import('./Catalog'));
const Favorite = lazy(() => import('./Favorite'));

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Suspense
        fallback={
          <Rings
            height="100"
            width="100"
            color="#e6533c"
            ariaLabel="rings-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
            }}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
