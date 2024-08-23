import { useForm, usePage } from "@inertiajs/react";
import React from 'react'
import { IoExit } from "react-icons/io5";
  
const HeaderCustomer = () => {
    const { auth } = usePage().props as any;
    const { post } = useForm();

    const handleLogout = (e: any) => {
        e.preventDefault();
        post(route("logout"));
    };

    return (
        <header className="h-16 bg-gray-50 drop-shadow-sm px-2">
            <div className="container m-auto h-full flex items-center justify-between">
                <div className="w-14 h-14 rounded-full bg-gray-50 p-1">
                    <img className="rounded-full" src={`/storage/images/${auth?.user?.avatar ? auth?.user?.avatar : 'default.png'}`} alt="" />
                </div>
                <div>
                    <button
                        className="flex items-center gap-2 rounded-md shadow px-3 py-1.5 bg-megb-red-primary hover:bg-megb-red-primary/80 text-sm text-white font-semibold uppercase border-2 border-white"
                        onClick={(e) => handleLogout(e)}
                    >
                        <span>Sair</span>
                        <IoExit size={20} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderCustomer