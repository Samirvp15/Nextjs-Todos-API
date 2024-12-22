// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import Sidebar from '@/components/Sidebar';
import TopMenu from '@/components/TopMenu';




export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Sidebar />

            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen  bg-gradient-to-b from-sky-400 to-cyan-100">

                <TopMenu />
                <div className="min-h-[calc(100vh-2rem)] px-6 pt-6">

                    {children}
                </div>
            </div>
        </>
    );
}