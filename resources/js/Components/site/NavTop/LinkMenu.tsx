import { Link, usePage } from '@inertiajs/react';
import React from 'react'

interface LinkMenuProps {
    title: string;
    slug?: any;
    param?: string;
    active?: boolean;
}

const LinkMenu = (props: LinkMenuProps) => {
    
    return (
        <Link
            className={`px-3 group relative py-1 h-full flex items-center`}
            href={props?.slug}
        >
            <span className={`text-slate-400 text-sm font-semibold uppercase ${props.active && 'md:text-slate-200 md:hover:text-slate-500 text-megb-blue-plus'} drop-shadow`}>{props.title}</span>
            <span className="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-b-megb-red-primary transition-all duration-200 group-hover:w-full"></span>
            {props.active && <span className="absolute left-0 bottom-0 border-b-2 border-b-megb-red-primary w-full"></span>}
        </Link>
    )
}

export default LinkMenu