import React, { useEffect, useState } from 'react'
import ProductContent from "./ProductContent"
import { RiArrowDownDoubleFill } from "react-icons/ri";
import HeaderSection from "../HeaderSection";
import { Link, router, usePage } from "@inertiajs/react";
import { FaArrowUpAZ, FaArrowUpZA } from "react-icons/fa6";
import { apiweb } from "@/bootstrap";
import { IoClose, IoSearch } from "react-icons/io5";

interface ProductsProps {
    data: any
};

const ProductsGrid = ({ data }: ProductsProps) => {
    const { url } = usePage();
    const { datasite } = usePage().props as any;
    const [cardLoad, setCardLoad] = useState<any>([]);
    const [numItems, setNumItens] = useState<number>(10);
    const [buttonText, setButtonText] = useState<string>("Carregar Mais");
    const [orderItems, setOrderItens] = useState<boolean>(false);
    const [searchItem, setSearchItem] = useState<boolean>(false);

    const catName = datasite?.allcat?.filter((ct: any) => (ct.id === data[0]?.pivot?.category_id));
    const size = 10;
    const handleNumItems = () => {
        if (numItems < data.length) {
            setNumItens(numItems + size);
        } else {
            setNumItens(size)
        }
    }

    useEffect(() => {
        const items = data?.filter((item: any, idx: number) => (idx < numItems)).sort((a: any, b: any) => (a.title > b.title ? 1 : -1));
        setCardLoad(items)
        if (numItems < data.length) {
            setButtonText("Carregar Mais");
        } else {
            setButtonText("Carregar Menos");
        }
    }, [data, numItems, size]);

    const handleOrderProduct = () => {
        setOrderItens(state => !state);
        if (orderItems) {
            const ordered = cardLoad.sort((a: any, b: any) => (a.title > b.title ? 1 : -1));
            setCardLoad(ordered);
        } else {
            const ordered = cardLoad.sort((a: any, b: any) => (a.title < b.title ? 1 : -1));
            setCardLoad(ordered);
        }

    }

    const handleSearchProduct = async (e: any) => {
        const searchTerm = e.target.value;
        if (searchTerm == '') {
            
            setCardLoad([]);
        } else {
            await apiweb.get(`products/search?product=${searchTerm}`)
                .then((res) => {
                    const filteredItems = res.data.response.products;
                    setCardLoad(filteredItems)
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    console.log('fim');
                })
            setSearchItem(true);
        }
    }

    return (
        <section className="px-4 py-8 bg-gray-50">
            <div className="container m-auto mb-4 flex items-center justify-between">
                <div>
                    <button
                        className="flex items-center justify-start gap-4"
                        onClick={() => handleOrderProduct()}
                    >
                        <span className="text-xs font-semibold uppercase">Ordenar</span>
                        {orderItems
                            ? <FaArrowUpAZ size={20} />
                            : <FaArrowUpZA size={20} />
                        }
                    </button>
                </div>
                <div className="">
                    <div className="relative text-gray-500">
                    <input
                        className="input-form md:w-72"
                        type="text"
                        placeholder="Buscar produto"
                        onChange={handleSearchProduct}
                    />
                    <IoSearch size={22} className="absolute top-2.5 right-2.5" />
                    {searchItem && <Link href={`/produtos`}><IoClose size={22} className="absolute top-2.5 right-10"/></Link> }
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                {searchItem
                    ? <HeaderSection title={`Produtos encontrados ${cardLoad.length}`} />
                    : <HeaderSection title={url.split('/')[3] ? catName[0]?.name : 'Produtos'} />
                }
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {cardLoad?.map((post: any, idx: number) => (
                        <div key={idx} data-aos="zoom-in">
                            <ProductContent product={post} />
                        </div>
                    ))}
                </div>
                {!searchItem && data.length > size &&
                    <div className="mt-4 flex flex-col items-center justify-center">

                        <div className="pb-2 text-sm font-semibold text-gray-500">{cardLoad.length} produtos de {data.length}</div>
                        <button
                            className="flex items-center justify-center gap-1 px-3 py-1 text-white bg-megb-red-primary hover:bg-megb-red-primary/80 transition-colors duration-300 text-sm font-semibold border border-megb-red-primary/20 rounded-md shadow-md"
                            onClick={() => handleNumItems()}
                            type="button"
                        >
                            <span className={`hover:rotate-0 ${numItems < data.length ? 'rotate-0' : '-rotate-180'} transition-all duration-300`}>
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