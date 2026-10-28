import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="w-full min-h-screen grid grid-cols-[250px_1fr]">
            <div>
                <Sidebar />
            </div>
            <div>
                <div className="bg-gray-300 w-full flex gap-1 items-center justify-end px-4 py-2 sticky top-0 right-0 z-50">
                    <h1 className="font-bold">Niranjan</h1>
                    <i className="fa-solid fa-circle-user text-3xl"></i>
                </div>
                <main className="px-3 py-2">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout;