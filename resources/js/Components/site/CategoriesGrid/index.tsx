import React, { Fragment } from "react";
import { Link, usePage } from "@inertiajs/react";
import HeaderSection from "../HeaderSection";
import { IoLogoWhatsapp } from "react-icons/io5";

interface ServiceProps {
    data: any;
}

const CategoriesGrid = ({ data }: ServiceProps) => {
    const { url } = usePage() as any;
    const { datasite } = usePage().props as any;

    return (
        <section className="px-4 py-8" data-aos="zoom-in">
            <div className="container mx-auto">
                {data?.posts?.length > 0 &&
                    <>
                        <HeaderSection title={data?.name} />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {data?.posts?.map((service: any, idx: number) => (
                                // <Link key={idx} href={`${url}/${service?.slug}`}>
                                <div className="relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:scale-105 hover:shadow-lg">
                                    <img src={`/storage/uploads/${service?.featured}`}
                                        alt="" className="w-full h-[250px] object-bottom object-fill"
                                    />
                                    <div className="p-2 md:p-4 flex flex-col">
                                        <div className='flex flex-col flex-1 flex-grow pb-6'>
                                            <h3 className="text-base font-bold text-blue-900/80 uppercase mb-2">{service?.title}</h3>
                                            <p className="text-gray-700 mb-4 two-lines">
                                                {service?.description}Efetuamos sua troca de tela comprodutos originais
                                            </p>
                                        </div>
                                        <a
                                            href={`https://wa.me/${datasite.config?.whatsapp}?text=Gostaria de um orçamento.`}
                                            target="_blank"
                                            className="flex justify-end absolute bottom-2 right-2 bg-[#25D366] gap-1 py-2 p-3 rounded-2xl text-white font-semibold"
                                        >
                                            <IoLogoWhatsapp size={24} />
                                            <span>Solicite orçamento</span>
                                        </a>
                                    </div>
                                </div>
                                // </Link>
                            ))}
                        </div>
                    </>
                }
            </div>
        </section>

    )
}

export default CategoriesGrid