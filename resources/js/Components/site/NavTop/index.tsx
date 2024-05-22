import React from 'react'
import LinkMenu from "./LinkMenu"
import { Link } from '@inertiajs/react';

interface NavTopProps {
    navdata: any;
}
const NavTop = ({ navdata }: NavTopProps) => {

    return (
        <nav className="flex gap-6">

            <Link
                className="text-base text-slate-300 hover:text-slate-500 transition-colors duration-150 ease-in-out"
                href={route('home')}
            >
                <span className='font-bold'>Home</span>
            </Link>
            {navdata?.cat[0].map((cat: any, idx: number) => (
                <LinkMenu
                    title={cat.name}
                    slug={cat.slug}
                    param={"categoria"}
                />
            ))}
            {navdata?.pag[0].map((pag: any, idx: number) => (
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