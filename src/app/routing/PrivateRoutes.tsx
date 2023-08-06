import {FC, lazy, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from "@/app/layouts/masterLayout.tsx";
import {WithChildren} from "@/core/models";

const PrivateRoutes = () => {
    const RoomRoutes = lazy(() => import("../modules/room/RoomRoutes.tsx"))
    const SettingsRoutes = lazy(() => import("../modules/settings/SettingsRoutes.tsx"))

    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                {/* Redirect to Dashboard after success chat/registartion */}
                {/*<Route path='auth/*' element={<Navigate to='/room' />} />*/}
                {/* Pages */}
                <Route path='room/*' element={
                    <SuspensedView>
                        <RoomRoutes/>
                    </SuspensedView>
                }/>
                <Route path='settings/*' element={
                    <SuspensedView>
                        <SettingsRoutes/>
                    </SuspensedView>
                }/>
                {/*<Route path='dashboard' element={<DashboardWrapper />} />*/}
                {/* Page Not Found */}
                <Route path='*' element={<Navigate to='/error/404'/>}/>
            </Route>
        </Routes>
    )
}

const Loading = () => {
    return (
        <div>در حال لود شدن...</div>
    )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
    return <Suspense fallback={<Loading/>}>{children}</Suspense>
}

export {PrivateRoutes}
