import React from 'react'
import LinkMenu from "./LinkMenu"
import { Link } from '@inertiajs/react';

interface NavTopProps {
    data: any;
}

const NavTop = ({ data }: NavTopProps) => {

    return (
        <nav className="flex md:flex-row md:items-end flex-col md:gap-4 gap-1 h-full">
            <LinkMenu
                title="Home"
                slug={route('home')}
                param="home"
                active={route().current('home')}
            />
            {data?.cat.map((cat: any, idx: number) => (
                <LinkMenu
                    title={cat.name}
                    slug={cat.slug}
                    param={"categoria"}
                    active={route().current("slug", cat.slug)}
                />
            ))}
            {data?.pag.map((pag: any, idx: number) => (
                <LinkMenu
                    title={pag.title}
                    slug={pag.slug}
                    param="pagina"
                    active={route().current("slug", pag.slug)}
                />
            ))}

        </nav>
    )
}

export default NavTop