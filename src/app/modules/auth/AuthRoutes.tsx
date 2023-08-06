import {Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '@/core/components/PageData.tsx'
import Login from "@/app/modules/auth/pages/login";

const AuthRoutes = () => {
    const AuthBreadCrumbs: Array<PageLink> = [
        {
            title: 'لاگین',
            path: 'auth/login',
            isSeparator: false,
            isActive: false,
        },
    ]
    return (
        <Routes>
            <Route>
                <Route path='login' element={
                    <>
                        <PageTitle breadcrumbs={AuthBreadCrumbs}>لاگین</PageTitle>
                        <Login/>
                    </>
                }>
                </Route>
            </Route>
        </Routes>
    )
}
export default AuthRoutes