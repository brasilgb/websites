import { maskMoney } from "@/Utils";
import { Link, usePage } from "@inertiajs/react";
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5"

interface ProductProps {
    product: any;
}

const ProductContent = ({ product }: ProductProps) => {
    const { datasite } = usePage().props as any;

    return (
        <div className="relative bg-white shadow-md rounded-md duration-500 hover:shadow-xl ">

            <img src={`/storage/uploads/${product?.featured}`} alt="Product" className=" object-cover rounded-t-md" />
            <div className="px-4 py-3">
                <span className="text-gray-400 mr-3 uppercase text-xs">{product?.brand}</span>
                <p className="text-sm font-bold text-black truncate block capitalize">{product?.title}</p>
                <div className="flex items-center">
                    <div className="flex items-center justify-end w-full py-4">

                        {product?.valnormal && !product?.valpromo &&
                            <p className="text:base md:text-lg font-semibold text-megb-blue-secundary cursor-auto">R$ {maskMoney(product?.valnormal)}</p>
                        }
                        {product?.valnormal && product?.valpromo &&
                            <>
                                <p className="text-lg font-semibold text-megb-blue-secundary cursor-auto">R$ {maskMoney(product?.valpromo)}</p>

                                <del>
                                    <p className="text-sm text-megb-red-primary cursor-auto ml-2">R$ {maskMoney(product?.valnormal)}</p>
                                </del>
                            </>
                        }
                    </div>
                </div>
                    <div className="flex items-center justify-between w-full">
                    <Link
                    className="flex items-center justify-center gap-1 px-3 py-1 text-white bg-megb-red-primary hover:bg-megb-red-primary/80 transition-colors duration-300 text-sm font-semibold border border-megb-red-primary/20 rounded-md shadow-md"
                    href={route(`products.getproducts`, product?.slug)}
                    >
                    Detalhes
                    </Link>
                    <a
                        href={`https://wa.me/${datasite.config?.whatsapp}?text=Quero informações sobre ${product?.title}`}
                        target="_blank" className="flex justify-end text-color bottom-2 right-2 text-[#25D366] hover:text-[#25D366]/90">
                        <IoLogoWhatsapp size={30} />
                    </a>
                    </div>
            </div>

        </div>
    )
}

export default ProductContent