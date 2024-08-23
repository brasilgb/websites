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
            className={`md:w-48 w-36 md:py-4 py-2 drop-shadow-md border-2 border-white rounded-md font-bold uppercase flex items-center justify-center gap-1
            ${props.active ? 'bg-megb-blue-secundary hover:bg-megb-blue-secundary/80 text-gray-50' : 'bg-gray-50 hover:bg-megb-blue-secundary/80 text-megb-blue-plus'}`}
        >
            <div className='md:text-lg text-sm'>{props.icon}</div>
            <div className=' text-xs'>{props.label}</div>
        </button>
        </div>
    )
}

export default LinkMenuCustomers