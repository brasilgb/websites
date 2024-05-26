import { Link } from '@inertiajs/react';
import React from 'react'

interface LinkMenuProps {
    title: string;
    slug: string;
    param?: string;
}

const LinkMenu = (props: LinkMenuProps) => {
    return (
        <Link
        className="text-base text-slate-300 hover:text-slate-500 transition-colors duration-150 ease-in-out"
        href={route("slug",props.slug)}
        >
            <span className=''>{props?.title}</span>
        </Link>
    )
}

export default LinkMenu