import { Link } from '@inertiajs/react';
import React from 'react'
import LinkMenu from './LinkMenu';

interface NavFooterProps {
    data: any;
}

const NavFooter = ({ data }: NavFooterProps) => {

    return (
        <nav className="flex flex-col gap-1">
            <Link
                className="text-base text-slate-300 hover:text-slate-500 transition-colors duration-150 ease-in-out"
                href={route('home')}
            >
                <span>Home</span>
            </Link>
            {data.cat?.map((cat: any, idx: number) => (
                <LinkMenu
                    title={cat.name}
                    slug={cat.slug}
                    param={"categoria"}
                />
            ))}
            {data.pag?.map((pag: any, idx: number) => (
                <LinkMenu
                    title={pag.title}
                    slug={pag.slug}
                    param="pagina"
                />
            ))}
        </nav>
    )
}

export default NavFooter