import { Link, usePage } from '@inertiajs/react';
import { IoBasketSharp, IoBusiness, IoCaretForward, IoChevronForward, IoCog, IoColorPalette, IoDocumentSharp, IoDocumentTextSharp, IoGridSharp, IoHome, IoList, IoOptionsSharp, IoPeople, IoPerson } from "react-icons/io5";
import React, { useState } from 'react'
import { GiReceiveMoney } from 'react-icons/gi';
import { IoIosBusiness } from 'react-icons/io';
import ApplicationLogo from "@/Components/ApplicationLogo";
import SideLink from "./SideLink";
import { AiOutlineDashboard } from "react-icons/ai";

const SideBar = () => {
    const { auth } = usePage().props as any;
    const [openSide, setOpenSide] = useState(true);
    const [dropdowOpen, setDropdowOpen] = useState(false);
    return (
        <aside className={`${openSide ? "md:w-72 " : "w-20"} h-full relative duration-300 p-5 pt-8 shadow-lg`}>

            <div onClick={() => setOpenSide(!openSide)} className={`${openSide ? "rotate-180 " : "0"} duration-300 absolute cursor-pointer flex items-center justify-center -right-2 w-7 h-7 rounded-full bg-white top-16 shadow-sm border-2 border-sky-800 text-sky-800 `}>
                <IoChevronForward />
            </div>

            <div className={`flex items-center h-24 ${openSide ? 'justify-center' : 'justify-start'}`}>
                <div className={`${openSide ? 'w-20' : 'w-10'}`}>
                    <ApplicationLogo />
                </div>

            </div>
            <ul className='mt-12 flex flex-col gap-2'>
                <SideLink
                    url={route('dashboard')}
                    icon={<AiOutlineDashboard size={24} />}
                    openSide={openSide}
                    active={route().current('dashboard')}
                    label="Dashboard"
                />
                <SideLink
                    url={route('pages.index')}
                    icon={<IoDocumentSharp size={24} />}
                    openSide={openSide}
                    active={route().current('pages.*')}
                    label="Páginas"
                />

                <SideLink
                    url={route('categories.index')}
                    icon={<IoList size={24} />}
                    openSide={openSide}
                    active={route().current('categories.*')}
                    label="Categorias"
                />

                <SideLink
                    url={route('posts.index')}
                    icon={<IoDocumentTextSharp size={24} />}
                    openSide={openSide}
                    active={route().current('posts.index')}
                    label="Postagens"
                />

                <SideLink
                    url={route('products.index')}
                    icon={<IoBasketSharp size={24} />}
                    openSide={openSide}
                    active={route().current('products.*')}
                    label="Produtos"
                />

                <SideLink
                    url={route('settings.index')}
                    icon={<IoOptionsSharp size={24} />}
                    openSide={openSide}
                    active={route().current('settings.*')}
                    label="Configurações"
                />

                <SideLink
                    url={route('users.index')}
                    icon={<IoPerson size={24} />}
                    openSide={openSide}
                    active={route().current('users.*')}
                    label="Usuários"
                />

                <SideLink
                    url={route('sections.index')}
                    icon={<IoGridSharp size={24} />}
                    openSide={openSide}
                    active={route().current('sections.*')}
                    label="Home do site"
                />
            </ul>
        </aside>
    )
}

export default SideBar