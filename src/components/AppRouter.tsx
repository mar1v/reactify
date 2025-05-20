import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../router'
import { useTypedSelector } from '../hooks/useTypesSelector'
const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        <Routes>
            {isAuth
                ?
                <>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    )}
                    <Route path='*' element={<Navigate to={RouteNames.EVENT} replace />} />
                </>
                :
                <>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    )}
                    <Route path='*' element={<Navigate to={RouteNames.LOGIN} replace />} />
                </>
            }
        </Routes>
    )
}

export default AppRouter