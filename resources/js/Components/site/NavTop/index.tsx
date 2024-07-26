import React from 'react'
import LinkMenu from "./LinkMenu"
import { Link } from '@inertiajs/react';

interface NavTopProps {
    data: any;
}

const NavTop = ({ data }: NavTopProps) => {

    return (
        <nav className="flex md:flex-row flex-col md:gap-6 gap-1">
            <Link
                className="text-base md:text-slate-300 md:hover:text-slate-500 text-megb-blue-plus hover:text-megb-blue-primary transition-colors duration-150 ease-in-out"
                href={route('home')}
            >
                <span>Home</span>
            </Link>
            {data?.cat.map((cat: any, idx: number) => (
                <LinkMenu
                    title={cat.name}
                    slug={cat.slug}
                    param={"categoria"}
                />
            ))}
            {data?.pag.map((pag: any, idx: number) => (
                <LinkMenu
                    title={pag.title}
                    slug={pag.slug}
                    param="pagina"
                />
            ))}

        </nav>
    )
}

export default NavTop