import { Link } from "@inertiajs/react";
import React from 'react'

interface ServiceProps {
    data: any;
}

const ServiceContent = ({ data }: ServiceProps) => {

    return (
        <Link href={route("slug", data?.slug)}>
            <div className="relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:shadow-xl">
                <img src={`/storage/uploads/${data?.featured}`}
                    alt="" className="w-full h-64 object-cover" />
                <div className="p-2 md:p-4 flex flex-col">
                    <div className='flex flex-col flex-1 flex-grow'>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{data?.title}</h3>
                        <p className="text-gray-700 mb-4 two-lines">
                            {data?.summary}
                        </p>
                    </div>
                    <div className="flex justify-end absolute bottom-2 right-2">

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ServiceContent