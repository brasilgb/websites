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
            className={`text-base md:text-slate-300 md:hover:text-slate-500 text-megb-blue-plus hover:text-megb-blue-primary transition-colors duration-150 ease-in-out`}
            href={route("slug",props.slug)}
        >
            <span className=''>{props?.title}</span>
        </Link>
    )
}

export default LinkMenu