import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5"

type Props = {}

const ProductContent = (props: Props) => {
    return (
        <div className=" bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-lg">
            <a href="#">
                <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className=" object-cover rounded-t-md" />
                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                    <div className="flex items-center">
                        {/* <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del> */}
                        <div className="ml-auto">
                            <IoLogoWhatsapp size={30} />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProductContent