import React, { Fragment } from "react";
import { Link, usePage } from "@inertiajs/react";

interface ServiceProps {
    data: any;
}

const CategoriesGrid = ({ data }: ServiceProps) => {
    const { url } = usePage() as any;
    
    return (
        <section className="px-4 py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data?.map((service: any, idx: number) => (
                        <Link key={idx} href={`${url}/${service?.slug}`}>
                            <div className="relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:scale-105 hover:shadow-lg">
                                <img src={`/storage/uploads/${service?.featured}`}
                                    alt="" className="w-full h-[250px] object-bottom object-fill"
                                />
                                <div className="p-2 md:p-4 flex flex-col">
                                    <div className='flex flex-col flex-1 flex-grow'>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{service?.title}</h3>
                                        <p className="text-gray-700 mb-4 two-lines">
                                            {service?.description}
                                        </p>
                                    </div>
                                    <div className="flex justify-end absolute bottom-2 right-2">

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default CategoriesGrid