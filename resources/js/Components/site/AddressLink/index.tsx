import React from 'react'
import { FaPhoneFlip } from 'react-icons/fa6'
import { IoLogoInstagram, IoLogoWhatsapp, IoMail } from 'react-icons/io5'
import { PiMapPinFill } from 'react-icons/pi'
import Actions from "../Actions";

interface AddressProps {
    data: any;
}

const AddressLink = ({ data }: AddressProps) => {

    return (
        <div className="md:container md:mx-auto md:h-12 flex md:flex-row flex-col md:items-center justify-between">
            <div className="py-4 mx-4">
                <Actions />
            </div>
            <div className="flex-1 flex md:flex-row flex-col flex-start justify-between md:gap-8 gap-2 md:mx-0 mx-4">
                <div className="flex">
                    <PiMapPinFill size={18} className='text-blue-500' />
                    <span className="text-sm ml-2 text-gray-500">{data.config?.address}</span>
                </div>
                <div className="flex">
                    <FaPhoneFlip size={18} className='text-blue-500' />
                    <span className="text-sm ml-2 text-gray-500">{data.config?.phone}</span>
                </div>
                <div className="flex">
                    <IoMail size={18} className='text-blue-500' />
                    <span className="text-sm ml-2 text-gray-500">{data.config?.email}</span>
                </div>
            </div>
            <div className="flex-1 flex md:justify-end md:mx-0 mx-4 md:mt-0 mt-4">
                <a href={`https://api.whatsapp.com/send?phone=${data.config?.whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`} target='_blank'>
                    <div className='mr-2 text-gray-500 border border-gray-500 p-1.5 rounded-full'>
                        <IoLogoWhatsapp size={18} />
                    </div>
                </a>
                <a href={`https://ig.me/m/${data.config?.instagram}`} target='_blank'>
                    <div className='text-gray-500 border border-gray-500 p-1.5 rounded-full'>
                        <IoLogoInstagram size={18} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AddressLink