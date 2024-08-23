import React from 'react'

interface LinkProps {
    url?: any;
    icon: any;
    label: string;
    active: boolean;
}

const LinkMenuCustomers = (props: LinkProps) => {
    return (
        <div className='py-2'>
            <button
                onClick={props.url}
                className={`md:w-48 w-40 md:py-4 py-2 drop-shadow-md border-2 border-white rounded-md font-bold uppercase flex items-center justify-center gap-1 transition-colors duration-300 hover:bg-megb-blue-secundary/80 hover:text-gray-100
            ${props.active ? 'bg-megb-blue-secundary text-gray-50' : 'bg-gray-50 text-megb-blue-plus '}`}
            >
                <div className='md:text-lg text-sm'>{props.icon}</div>
                <div className=' text-xs'>{props.label}</div>
            </button>
        </div>
    )
}

export default LinkMenuCustomers