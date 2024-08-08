import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5"

interface ProductProps {
    product: any;
}

const ProductContent = ({ product }: ProductProps) => {
    return (
        <div className="relative bg-white shadow-md rounded-md duration-500 hover:shadow-xl pb-6">

                <img src={`/storage/uploads/${product?.featured}`}
                    alt="Product" className=" object-cover rounded-t-md" />
                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{product?.brand}</span>
                    <p className="text-sm font-bold text-black truncate block capitalize">{product?.title}</p>
                    <div className="flex items-center">
                        {/* <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del> */}
                        <div className="flex justify-end absolute text-color bottom-2 right-2 text-green-600 hover:text-green-500">
                            <IoLogoWhatsapp size={30} />
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default ProductContent