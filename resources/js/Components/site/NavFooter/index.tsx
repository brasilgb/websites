import { Link, usePage } from '@inertiajs/react';
import React from 'react'
import LinkMenu from './LinkMenu';

interface NavFooterProps {
    data: any;
}

const NavFooter = ({ data }: NavFooterProps) => {
    const { datasite } = usePage().props as any
    return (
        <nav className="flex flex-col gap-1">
            <LinkMenu
                title="Home"
                slug={'/'}
                param="home"
            // active={url === '/' ? true : false}
            />
            <LinkMenu
                title="Serviços"
                slug={'/servicos'}
                param="services"
            // active={url.startsWith('/servicos')}
            />
            <LinkMenu
                title="Produtos"
                slug={'/produtos'}
                param="products"
            // active={url.startsWith('/produtos')}
            />
            {datasite?.pag.map((pag: any, idx: number) => (
                <LinkMenu
                    title={pag.title}
                    slug={route('slug', pag.slug)}
                    param="pagina"
                // active={url.startsWith(`/${pag.slug}`)}
                />
            ))}
        </nav>
    )
}

export default NavFooter