import React from 'react'
import LinkMenu from "./LinkMenu"
import { usePage } from "@inertiajs/react"

const NavTop = () => {
    const { datasite } = usePage().props as any
    return (
        <nav className="flex md:flex-row md:items-end flex-col md:gap-4 gap-1 h-full">
            <LinkMenu
                title="Home"
                slug={'Home'}
                param="home"
                active={'home'}
            />
            <LinkMenu
                title="Serviços"
                slug={'/servicos'}
                param="services"
                active={'services'}
            />
            <LinkMenu
                title="Produtos"
                slug={'/produtos'}
                param="products"
                active={'products'}
            />
            {/* {datasite?.pag.map((cat: any, idx: number) => (
                <LinkMenu
                    title={cat.name}
                    slug={`produtos/${cat.slug}`}
                    param={"produtos"}
                    active={route().current(cat.slug)}
                />
            ))} */}

            {datasite?.pag.map((pag: any, idx: number) => (
                <LinkMenu
                    title={pag.title}
                    slug={pag.slug}
                    param="pagina"
                    // active={route().current(pag.slug)}
                />
            ))}

        </nav>
    )
}

export default NavTop