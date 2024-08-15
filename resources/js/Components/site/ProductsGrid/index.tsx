import React, { useEffect, useState } from 'react'
import ProductContent from "./ProductContent"
import { RiArrowDownDoubleFill } from "react-icons/ri";
import HeaderSection from "../HeaderSection";
import { usePage } from "@inertiajs/react";

interface ProductsProps {
    data: any
};

const ProductsGrid = ({ data }: ProductsProps) => {
    const { url } = usePage();
    const { datasite } = usePage().props as any;
    const [cardLoad, setCardLoad] = useState<any>([]);
    const [numItems, setNumItens] = useState<number>(10);
    const [buttonText, setButtonText] = useState<string>("Carregar Mais");
    // console.log(data[0]?.pivot?.category_id);
    
    const catName = datasite?.allcat?.filter((ct:any) => (ct.id === data[0]?.pivot?.category_id));
    const size = 10;
    const handleNumItems = () => {
        if (numItems > size) {
            setNumItens(size);
        } else {
            setNumItens(numItems + size)
        }
    }

    useEffect(() => {
        const items = data?.filter((item: any, idx: number) => (idx < numItems));
        setCardLoad(items)
        if (numItems > size) {
            setButtonText("Carregar Menos");
        } else {
            setButtonText("Carregar Mais");
        }
    }, [data, numItems, size]);

    return (
        <section className="px-4 py-8 bg-gray-50">
            <div className='container mx-auto'>
                <HeaderSection title={url.split('/')[3] ? catName[0]?.name : 'Produtos'} />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {cardLoad?.map((post: any, idx: number) => (
                        <div key={idx} data-aos="zoom-in">
                            <ProductContent product={post} />
                        </div>
                    ))}
                </div>
                {data.length > size &&
                    <div className="mt-4 flex flex-col items-center justify-center">

                        <div className="pb-2 text-sm font-semibold text-gray-500">{cardLoad.length} produtos de {data.length}</div>
                        <button
                            className="flex items-center justify-center gap-1 px-3 py-1 text-white bg-megb-red-primary hover:bg-megb-red-primary/80 transition-colors duration-300 text-sm font-semibold border border-megb-red-primary/20 rounded-md shadow-md"
                            onClick={() => handleNumItems()}
                            type="button"
                        >
                            <span className={`hover:rotate-0 ${cardLoad.length > size ? '-rotate-180' : 'rotate-0'} transition-all duration-300`}>
                                <RiArrowDownDoubleFill size={25} />
                            </span>
                            <span>{buttonText}</span>
                        </button>
                    </div>
                }

            </div>
        </section>
    )
}

export default ProductsGrid