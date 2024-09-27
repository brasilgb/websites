import { Link, useForm, usePage } from "@inertiajs/react";
import React from 'react'
import { IoExit, IoHomeSharp } from "react-icons/io5";

const HeaderCustomer = () => {
    const { auth } = usePage().props as any;

    return (
        <header className="h-16 bg-gray-50 drop-shadow-sm">
            <div className="container m-auto h-full flex items-center justify-between">
                <div className="w-14 h-14 rounded-full bg-gray-200 p-1 flex items-center justify-center">
                    <img className="rounded-full h-full m-full" src={`/storage/images/${auth?.user?.avatar ? auth?.user?.avatar : 'default.png'}`} alt="" />
                </div>
                <div>
                    <Link
                    className="flex items-center gap-2 rounded-md shadow px-3 py-1.5 bg-megb-blue-secundary hover:bg-megb-blue-secundary/80 text-xs text-white font-semibold uppercase border-2 border-white"
                    href={route('home')}
                    as="button"
                    >
                        <IoHomeSharp size={16} />
                    <span>Ir para o site</span>
                    </Link>
                </div>
                <div>
                    <Link
                        className="flex items-center gap-2 rounded-md shadow px-3 py-1.5 bg-megb-red-primary hover:bg-megb-red-primary/80 text-sm text-white font-semibold uppercase border-2 border-white"
                        href={route('logout')}
                        method="post"
                        as="button"
                    >
                        <span>Sair</span>
                        <IoExit size={20} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderCustomer