import { Link } from "@inertiajs/react";
import React from 'react'
import { IoApps } from "react-icons/io5";

interface FilterProductsProps {
    data: any;
}

const FilterProducts = (props: FilterProductsProps) => {
    return (
        <main className="bg-gray-100 flex items-center justify-center py-6 px-4">
            <div className="container m-auto flex items-center justify-start gap-2 w-full overflow-auto">
                <Link
                    className="text-xs font-medium uppercase text-gray-700/70 hover:text-gray-700 transition-colors duration-300"
                    href={`/produtos`}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-24 h-24 bg-gray-50 shadow border-4 border-white rounded-full flex items-center justify-center">
                            <IoApps size={50} />
                        </div>
                        <div>
                            Destaques
                        </div>
                    </div>
                </Link>
                {props.data?.map((category: any, idx: number) => (
                    <Link key={idx}
                        className="text-xs font-medium uppercase text-gray-700/70 hover:text-gray-700 transition-colors duration-300"
                        href={`/produtos/categoria/${category.slug}`}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="w-24 h-24 bg-gray-500 shadow border-4 border-white rounded-full flex items-center justify-center">
                                <img className="rounded-full w-full h-full" src={`/storage/uploads/${category.thumbnail}`} alt="" />
                            </div>
                            <div>
                                {category.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default FilterProducts