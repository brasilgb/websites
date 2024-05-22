import React from 'react'

interface ServiceProps {
    data: any;
}

const ServiceContent = ({data}: ServiceProps) => {
    
    return (
        <div className="relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:scale-105 hover:shadow-lg">
            <img src={`/storage/uploads/${data?.featured}`}
                alt="" className="w-full h-64 object-cover"  />
                
            <div className="p-4 md:p-6 flex flex-col">
                <div className='flex flex-col flex-1'>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{data.title}</h3>
                    <p className="text-gray-700 mb-4 two-lines">
                        {data?.summary}
                    </p>
                </div>
                <div className="flex justify-end absolute bottom-2 right-2">
                    <a href={route("slug", data?.slug)}
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                        Laia mais
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceContent