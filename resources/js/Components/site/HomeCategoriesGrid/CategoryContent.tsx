import { Link, usePage } from "@inertiajs/react";
import React from 'react'

interface ServiceProps {
    data: any;
}

const HomeCategoryContent = ({ data }: ServiceProps) => {
const { url } = usePage()
    return (
        <Link href={`/servicos/${data?.slug}`}>
            <div className="relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:shadow-xl"  data-aos="zoom-in">
                <img src={`/storage/uploads/${data?.featured}`}
                    alt="" className="w-full md:h-[250px] object-bottom object-fill"
                />
                <div className="p-2 md:p-4 flex flex-col">
                    <div className='flex flex-col flex-1 flex-grow'>
                        <h3 className="text-base font-bold text-blue-900/80 uppercase mb-2">{data?.name}</h3>
                        <p className="text-gray-700 mb-4 two-lines">
                            {data?.description}
                        </p>
                    </div>
                    <div className="flex justify-end absolute bottom-2 right-2">

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HomeCategoryContent