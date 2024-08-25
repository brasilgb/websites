import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6"
import { IoLogoInstagram, IoLogoWhatsapp, IoMail } from "react-icons/io5"
import { PiMapPinFill } from "react-icons/pi"
import Actions from '../Actions'
import MenuButton from '../MenuButton'
import { Link } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import AddressLink from '../AddressLink'
import NavTop from "../NavTop"
interface HeaderProps {
    data?: any;
}

const HeaderLayout = ({ data }: HeaderProps) => {

    return (
        <>
            <div className="bg-gray-300 md:flex hidden">
                <AddressLink data={data} />
            </div>
            <div className="bg-megb-blue-plus sticky top-0 shadow-md flex flex-col z-40">
                <div className="container h-16 md:px-0 px-6 md:mx-auto flex flex-row items-center justify-start">
                    <div className="mr-8 w-18">
                        <Link href={route('home')}>
                            <div className="md:w-16 w-14">
                                <ApplicationLogo className="" />
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-between flex-1 h-full">
                        <div className="md:flex items-center justify-start md:flex-1 hidden h-full">
                            <NavTop />
                        </div>
                        <div className="md:flex items-center hidden">
                            <Actions />
                        </div>
                    </div>
                    <div className="md:hidden relative">
                        <MenuButton data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderLayout;