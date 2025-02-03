import React from 'react'
import LinkMenu from "./LinkMenu"
import { usePage } from "@inertiajs/react"

const NavTop = () => {
    const { datasite } = usePage().props as any
    const { url } = usePage() as any;
    return (
        <nav className="flex md:flex-row md:items-end flex-col md:gap-4 gap-1 h-full">
            <LinkMenu
                title="Home"
                slug={'/'}
                param="home"
                active={url === '/' ? true : false}
            />
            <LinkMenu
                title="Serviços"
                slug={'/servicos'}
                param="services"
                active={url.startsWith('/servicos')}
            />
            <LinkMenu
                title="Produtos"
                slug={'/produtos'}
                param="products"
                active={url.startsWith('/produtos') || url.startsWith('/produto')}
            />
            {datasite?.pag.map((pag: any, idx: number) => (
                <LinkMenu
                    title={pag.title}
                    slug={route('slug', pag.slug)}
                    param="pagina"
                    active={url.startsWith(`/${pag.slug}`)}
                />
            ))}
        </nav>
    )
}

export default NavTop