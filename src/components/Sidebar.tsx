import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SidebarItem from '@/components/SidebarItem';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import {CiLogout } from 'react-icons/ci';
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoIceCream, IoListOutline, IoLogoReact } from 'react-icons/io5';


const menuItems = [
    {
        icon: <IoCalendarOutline />,
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        icon: <IoCheckboxOutline />,
        path: '/dashboard/rest-todos',
        title: 'Rest TODOS'
    },
    {
        icon: <IoListOutline />,
        path: '/dashboard/server-todos',
        title: 'Server Actions'
    },
    {
        icon: <IoIceCream />,
        path: '/dashboard/cookies',
        title: 'Cookies'
    },
    {
        icon: <IoBasketOutline />,
        path: '/dashboard/products',
        title: 'Productos'
    },

]

export default async function Sidebar() {

    const session = await getServerSession(authOptions)
    const avatarUrl = (session?.user?.image)
    ? session.user.image
    : 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80'

    const userName = session?.user?.name ?? 'Desconocido'

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    {/* TODO: Next/Link hacia dashboard */}
                    <Link href="#" title="home">
                        {/* Next/Image */}
                        <IoLogoReact size={50} className="w-10 h-10 m-auto text-cyan-400" />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    {/* Next/Image */}
                    <Image width={80} height={80} src={avatarUrl} alt="" className="m-auto rounded-3xl" />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">

                    {menuItems.map(item => (
                        <SidebarItem
                            key={item.path}
                            {...item}
                        />
                    ))}
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    )
}
