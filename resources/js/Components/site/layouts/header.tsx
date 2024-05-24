import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6"
import { IoLogoInstagram, IoLogoWhatsapp, IoMail } from "react-icons/io5"
import { PiMapPinFill } from "react-icons/pi"
import AppLogo from '../AppLogo'
import NavTop from '../NavTop'
import Actions from '../Actions'
import MenuButton from '../MenuButton'
import { Link } from '@inertiajs/react'

interface HeaderProps {
    data: any;
}

const HeaderLayout = ({ data }: HeaderProps) => {

    return (
        <div className="shadow-md flex flex-col z-40">
            <div className="bg-gray-300">
                <div className="container m-auto h-12 flex items-center justify-between">
                    <div className="flex-1 flex justify-between gap-8">
                        <div className="flex">
                            <PiMapPinFill size={18} className='text-blue-500' />
                            <span className="text-sm ml-2 text-gray-500">{data.conf[0]?.address}</span>
                        </div>
                        <div className="flex">
                            <FaPhoneFlip size={18} className='text-blue-500' />
                            <span className="text-sm ml-2 text-gray-500">{data.conf[0]?.phone}</span>
                        </div>
                        <div className="flex">
                            <IoMail size={18} className='text-blue-500' />
                            <span className="text-sm ml-2 text-gray-500">{data.conf[0]?.email}</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <a href={data.conf[0]?.whatsapp} target='_blank'>
                            <div className='mr-2 text-gray-500 border border-gray-500 p-1.5 rounded-full'>
                                <IoLogoWhatsapp size={18} />
                            </div>
                        </a>
                        <a href={data.conf[0]?.instagram} target='_blank'>
                            <div className='text-gray-500 border border-gray-500 p-1.5 rounded-full'>
                                <IoLogoInstagram size={18} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-megb-blue-plus">
                <div className="container h-16 md:px-0 px-6 md:mx-auto flex flex-row items-center justify-start">
                    <div className="mr-8 w-18">
                        <Link href={route('home')}>
                            <AppLogo src={`/storage/images/${data[0]?.logo ? data[0]?.logo : "default.png"}`} />
                        </Link>
                    </div>
                    <div className="flex justify-between flex-1">
                        <div className="md:flex justify-start md:flex-1 hidden">
                            <NavTop navdata={data} />
                        </div>
                        <div className="md:flex hidden">
                            <Actions />
                        </div>
                    </div>
                    <div className="md:hidden relative">
                        <MenuButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLayout;