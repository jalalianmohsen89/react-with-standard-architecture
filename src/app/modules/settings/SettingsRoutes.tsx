import {Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '@/core/components/PageData.tsx'
import Profile from "@/app/modules/settings/pages/profile";

const SettingsRoutes = () => {
    const SettingsBreadCrumbs: Array<PageLink> = [
        {
            title: 'پروفایل',
            path: 'auth/profile',
            isSeparator: false,
            isActive: false,
        },
    ]
    return (
        <Routes>
            <Route>
                <Route path='profile' element={
                    <>
                        <PageTitle breadcrumbs={SettingsBreadCrumbs}>پروفایل</PageTitle>
                        <Profile/>
                    </>
                }>
                </Route>
            </Route>
        </Routes>
    )
}
export default SettingsRoutes