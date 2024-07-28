import type { LazyExoticComponent } from 'react'
import { memo, Suspense, lazy } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

const Loading = () => {
  return <div>加载中...</div>
}

export const buildRouteSuspense = (LazyRoute: LazyExoticComponent<any>) => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyRoute />
    </Suspense>
  )
}

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={buildRouteSuspense(lazy(() => import('../pages/home')))}
        />
        <Route
          path="/user-center"
          element={buildRouteSuspense(
            lazy(() => import('../pages/user-center')),
          )}
        />
        <Route
          path="/list"
          element={buildRouteSuspense(lazy(() => import('../pages/list')))}
        />
        <Route
          path="/details/:id"
          element={buildRouteSuspense(lazy(() => import('../pages/details')))}
        />
      </Routes>
    </HashRouter>
  )
}

export default memo(Router)
