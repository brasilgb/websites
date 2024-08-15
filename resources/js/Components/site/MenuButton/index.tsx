import React, { useState } from 'react'
import AddressLink from '../AddressLink';
import NavTop from "../NavTop";
interface MenuButtonProps {
    data: any;
};

const MenuButton = ({ data }: MenuButtonProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(state => !state);
    }

    const MHamburger = () => {
        return (
            <div className="h-5 w-5 flex flex-col items-center justify-between">
                <div className="h-1 w-5 bg-white" />
                <div className="h-1 w-5 bg-white" />
                <div className="h-1 w-5 bg-white" />
            </div>
        );
    }

    const MClose = () => {
        return (
            <div className="relative h-5 w-5 flex flex-col items-center justify-center gap-2">
                <div className="h-1 w-6 absolute bg-gray-700 rotate-45 rounded-md" />
                <div className="h-1 w-6 absolute bg-gray-700 -rotate-45 rounded-md" />
            </div>
        );
    }

    return (
        <>
            <div className={`absolute w-8 h-8 -top-4 -right-4 ${openMenu ? 'bg-white text-gray-700' : 'text-white'} rounded-full flex items-center justify-center z-40`}>
                <button
                    onClick={() => handleOpenMenu()}
                >
                    {openMenu ? <MClose /> : <MHamburger />}
                </button>
            </div>
            <div className={`fixed top-16 right-0 bottom-0 left-0 bg-white z-10 transition-transform ${!openMenu ? '-translate-x-full' : '-translate-x-0'}`}>
                <div className='pl-5 mt-4'>
                    <NavTop/>
                </div>
                <div className='absolute bottom-5'>
                    <AddressLink data={data} />
                </div>
            </div>
        </>
    );
};

export default MenuButton;