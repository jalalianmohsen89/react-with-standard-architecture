import {FC} from 'react'
import {Outlet} from "react-router-dom";

export const MasterLayout: FC= () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}
