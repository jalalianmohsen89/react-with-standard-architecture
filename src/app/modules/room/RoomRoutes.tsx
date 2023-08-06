import {Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '@/core/components/PageData.tsx'
import Chat from "@/app/modules/room/pages/chat";
import Room from "@/app/modules/room/pages";

const RoomRoutes = () => {
    const RoomBreadCrumbs: Array<PageLink> = [
        {
            title: 'چت',
            path: 'room/chat',
            isSeparator: false,
            isActive: false,
        },
    ]
    return (
        <Routes>
            <Route>

                <Route path='' element={
                    <>
                        <PageTitle breadcrumbs={RoomBreadCrumbs}>روم</PageTitle>
                        <Room/>
                    </>
                }>
                </Route>
                <Route path='chat' element={
                    <>
                        <PageTitle breadcrumbs={RoomBreadCrumbs}>چت</PageTitle>
                        <Chat/>
                    </>
                }>
                </Route>
            </Route>
        </Routes>
    )
}
export default RoomRoutes